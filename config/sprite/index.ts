const fs = require('fs');
const Spritesmith = require('spritesmith');

const path = require('path');

interface List {
    in: string;
    out: string;
}

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
            const imageList = fs.readdirSync(dirname_IN).map((file: any) => {
                return dirname_IN + '/' + file;
            });
            Spritesmith.run(
                {
                    src: imageList,
                    algorithm: 'left-right',
                },
                function handleResult(err: any, result: any) {
                    // If there was an error, throw it
                    if (err) {
                        throw err;
                    }
                    // Output the image
                    fs.writeFileSync(dirname_OUT, result.image);
                    result.coordinates, result.properties; // Coordinates and properties
                },
            );
        });
    }
};

export {};
