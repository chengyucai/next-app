const fs = require('fs');

const Spritesmith = require('spritesmith');

const path = require('path');
const local = path.resolve(__dirname, './');
const write = require('write');
interface List {
    in: string;
    out: string;
    css: string;
}

const write_seting = {
    newline: true,
};
exports.LionSprite = class {
    list: List[];
    root: string;

    constructor({ root, list }: { root: string; list: List[] }) {
        this.list = list;
        this.root = root;
    }

    sprite() {
        this.list.map((data: List) => {
            const dirname_IN = path.resolve(this.root, data['in']);
            const dirname_OUT = path.resolve(this.root, data['out']);
            const imageList = fs.readdirSync(dirname_IN).map((file: string) => {
                return dirname_IN + '/' + file;
            });
            const CSS_URL = path.resolve(this.root, data['css'] || './');

            const regex_tital = new RegExp('.*./(.*)\\..*');
            const tital = data['out'].replace(regex_tital, '$1');

            Spritesmith.run(
                {
                    src: imageList,
                    algorithm: 'left-right',
                },
                function handleResult(err: string, result: any) {
                    // If there was an error, throw it
                    if (err) {
                        throw err;
                    }
                    // Output the image
                    fs.writeFileSync(dirname_OUT, result.image);

                    fs.readFile(path.resolve(local, `box.scss`), function(err: string, data: string) {
                        if (err) throw err;

                        data = data.toString();
                        data = data.replace(/#{NAME}/g, tital);
                        data = data.replace(/#{All_W}/g, result.properties.width.toString());
                        data = data.replace(/#{WIDTH}/g, (result.properties.width / imageList.length).toString());
                        data = data.replace(/#{HEIGHT}/g, result.properties.height.toString());
                        data = data.replace(/#{TIME}/g, (imageList.length - 1).toString());
                        data = data.replace(/#{TIMEs}/g, (imageList.length / 10).toString());
                        let box = data;

                        fs.readFile(path.resolve(local, `BG.scss`), function(err: string, BG: string) {
                            if (err) throw err;
                            BG = BG.toString();

                            Object.keys(result.coordinates).map((key: string) => {
                                const body = result.coordinates[key];
                                const regexN = new RegExp('.*/(.*)\\..*');
                                let text = BG;

                                text = text.replace(
                                    /#{NAME}/g,
                                    key
                                        .replace(regexN, '$1')
                                        .replace(/[\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]\s]/g, ''),
                                );
                                text = text.replace(/#{WIDTH}/g, body.width.toString());
                                text = text.replace(/#{HEIGHT}/g, body.height.toString());
                                text = text.replace(/#{PX}/g, body.x.toString());
                                text = text.replace(/#{PY}/g, body.y.toString());
                                box = box + text;
                            });

                            write.sync(CSS_URL + `/${tital}.scss`, box, write_seting);
                        });
                    });

                    result.coordinates, result.properties; // Coordinates and properties
                },
            );
        });
    }
};

export {};
