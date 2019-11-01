const prompts = require('prompts');
const write = require('write');
const path = require('path');
const local = path.resolve(__dirname, './');
const fs = require('fs');
const treeify = require('treeify');

const pages_seting = [
    {
        type: 'multiselect',
        name: 'seting',
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
        name: 'seting',
        message: 'Pick option:',
        choices: [
            { title: 'add preview.tsx', value: 'preview', selected: true, description: ' 加入storybook ' },
            { title: 'add css.scss', value: 'scss', selected: true, description: ' 加上預設CSS ' },
            // { title: 'add preview.scss', value: 'previewStyle', disabled: true, description: ' 加入storybook預設CSS ' },
        ],
        hint: '- add select',
    },
];

const write_seting = {
    newline: true,
};

const readdir = (dir: string[]): string[] => {
    const files = dir.map((path: string) => {
        return fs.readdirSync(path).map((file: any) => {
            return file;
        });
    });
    return [].concat(...files);
};

const writeFile = (url: string, terget: string, replace?: string) => {
    console.log('.');
    fs.readFile(path.resolve(local, `generate/${terget}`), function(err: any, data: any) {
        if (err) throw err;
        write.sync(url, data.toString().replace(/##_####/g, replace), write_seting);
    });
};

(async () => {
    const vil = await readdir(['./pages/', './components/']);

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
            validate: (value: string) => (vil.includes(value) ? `This name is already in use` : true),
        },
    ]);
    if (Object.entries(main).length === 0 && main.constructor === Object) return;

    const { seting } = await prompts(main.path === 'pages' ? pages_seting : components_seting);
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
            const index = seting.includes('dynamic') ? '[index]' : 'index';

            await writeFile(`${project_Path}/${index}.tsx`, `${index}.tsx`, main.project_name);

            if (seting.includes('list')) {
                const router = await require(local + '/json/router.json');
                const href = seting.includes('dynamic')
                    ? `/${main.project_name}/${main.project_name}`
                    : `/${main.project_name}`;
                router.push({
                    cate: `${main.project_name}`,
                    subMenu: [{ title: `${main.project_name}`, link: { href: href } }],
                });
                await write.sync(local + '/json/router.json', JSON.stringify(router), write_seting);
            }
        } else if (main.path === 'components') {
            await writeFile(`${project_Path}/components/Module.tsx`, 'Module.tsx', main.project_name);

            await writeFile(`${project_Path}/index.tsx`, 'components.tsx');

            if (seting.includes('preview')) {
                await writeFile(`${project_Path}/preview.tsx`, 'preview.tsx', main.project_name);
            }

            if (seting.includes('previewStyle')) {
                await writeFile(`${project_Path}/preview.scss`, 'css.scss', main.project_name);
            }
        }
        if (seting.includes('scss')) {
            await writeFile(`${project_Path}/css.scss`, 'css.scss', main.project_name);
        }

        console.log('OK');
    } else {
        console.log('!!! Fail Action !!!');
    }
})();

export {};
