export {};
const prompts = require('prompts');
const write = require('write');
const path = require('path');
const local = path.resolve(__dirname, './');
const fs = require('fs');
const treeify = require('treeify');

const pages_seting = [
    {
        type: 'multiselect',
        name: 'option',
        message: 'Pick option:',
        choices: [
            { title: 'add css.scss', value: 'scss', selected: true, description: ' 加上預設CSS ' },
            { title: 'add in router_list', value: 'list', selected: true, description: ' 加入清單 ' },
            { title: 'to dynamic_page', value: 'dynamic', description: ' 變為動態router ' },
        ],
        hint: '- add select',
    },
];

const components_seting = [
    {
        type: 'multiselect',
        name: 'option',
        message: 'Pick option:',
        choices: [
            { title: 'add preview.tsx', value: 'preview', selected: true, description: ' 加入storybook ' },
            { title: 'add css.scss', value: 'scss', selected: true, description: ' 加上預設CSS ' },
            { title: 'add preview.scss', value: 'previewStyle', disabled: true, description: ' 加入storybook預設CSS ' },
        ],
        hint: '- add select',
    },
];

const write_seting = {
    newline: true,
};

(async () => {
    const vil_pages = fs.readdirSync('./pages/').map((file: string[]) => {
        return file;
    });
    const vil_components = fs.readdirSync('./components/').map((file: string[]) => {
        return file;
    });
    const vil = [...vil_pages, ...vil_components];
    // console.log(vil);

    const main = await prompts([
        {
            type: 'select',
            name: 'path',
            message: 'Choose your project:',
            choices: [
                { title: 'pages', value: 'pages' },
                { title: 'components', value: 'components' },
                { title: 'magaele', value: 'magaele', description: " I haven't got access to it", disabled: true },
            ],
            initial: 1,
        },
        {
            type: 'text',
            name: 'project_name',
            message: `project name?`,
        },
    ]);
    if (Object.entries(main).length === 0 && main.constructor === Object) return;

    const seting = await prompts(main.path === 'pages' ? pages_seting : components_seting);
    if (Object.entries(seting).length === 0 && seting.constructor === Object) return;

    console.log(`----------------------------`);
    console.log(
        treeify.asTree(
            {
                main,
                seting, //  └─ oranges: mandarin
            },
            true,
        ),
    );
    console.log(`----------------------------`);

    const { confirm } = await prompts([
        {
            type: 'toggle',
            name: 'confirm',
            message: 'Can you confirm?',
            initial: false,
            active: 'yes',
            inactive: 'no',
        },
    ]);
    if (confirm) {
        const project_Path = `./${main.path}/${main.project_name}`;

        if (main.path === 'pages') {
            const index = seting.option.includes('dynamic') ? '[index]' : 'index';
            fs.readFile(path.resolve(local, `generate/${index}.txt`), function(err: any, data: any) {
                if (err) throw err;
                write.sync(
                    `${project_Path}/${index}.tsx`,
                    data.toString().replace(/##_####/g, main.project_name),
                    write_seting,
                );
            });
        } else if (main.path === 'components') {
            fs.readFile(path.resolve(local, 'generate/Module.txt'), function(err: any, data: any) {
                if (err) throw err;
                write.sync(
                    `${project_Path}/components/Module.tsx`,
                    data.toString().replace(/##_####/g, main.project_name),
                    write_seting,
                );
            });

            fs.readFile(path.resolve(local, 'generate/components.txt'), function(err: any, data: any) {
                if (err) throw err;
                write.sync(`${project_Path}/index.tsx`, data.toString(), write_seting);
            });

            if (seting.option.includes('preview')) {
                fs.readFile(path.resolve(local, 'generate/preview.txt'), function(err: any, data: any) {
                    if (err) throw err;
                    write.sync(
                        `${project_Path}/preview.tsx`,
                        data.toString().replace(/##_####/g, main.project_name),
                        write_seting,
                    );
                });
            }

            if (seting.option.includes('previewStyle')) {
                fs.readFile(path.resolve(local, 'generate/css.scss'), function(err: any, data: any) {
                    if (err) throw err;
                    write.sync(
                        `${project_Path}/preview.scss`,
                        data.toString().replace(/##_####/g, main.project_name),
                        write_seting,
                    );
                });
            }
        }
        if (seting.option.includes('scss')) {
            fs.readFile(path.resolve(local, 'generate/css.scss'), function(err: any, data: any) {
                if (err) throw err;
                write.sync(
                    `${project_Path}/css.scss`,
                    data.toString().replace(/##_####/g, main.project_name),
                    write_seting,
                );
            });
        }

        console.log('OK');
    } else {
        console.log('!!! Fail Action !!!');
    }
})();
