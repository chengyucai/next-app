const prompts = require('prompts');
const write = require('write');
const pages_seting = [
    {
        type: 'multiselect',
        name: 'value',
        message: 'Pick option:',
        choices: [
            { title: 'add css.scss', value: 'scss', selected: true, description: ' 加入清單 ' },
            { title: 'add in router_list', value: 'list', selected: true, description: ' 加上預設CSS ' },
            { title: 'to dynamic_page', value: 'dynamic', description: ' 變為動態router ' },
        ],
        hint: '- add select',
    },
];

const components_seting = [
    {
        type: 'text',
        name: 'file_name',
        message: `file name?`,
    },
    {
        type: 'multiselect',
        name: 'value',
        message: 'Pick option:',
        choices: [
            { title: 'add preview.tsx', value: 'tsx', selected: true, description: ' 加入storybook ' },
            { title: 'add preview.scss', value: 'scss', selected: true, description: ' 加上預設CSS ' },
            { title: 'add common.tsx', value: 'common', description: ' 加 ' },
        ],
        hint: '- add select',
    },
];

(async () => {
    const main = await prompts([
        {
            type: 'select',
            name: 'path',
            message: 'Choose the project you want',
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

    const seting = await prompts(main.path === 'pages' ? pages_seting : components_seting);

    const { confirm } = await prompts([
        {
            type: 'toggle',
            name: 'confirm',
            message: JSON.stringify(main) + JSON.stringify(seting) + ' \nCan you confirm?',
            initial: false,
            active: 'yes',
            inactive: 'no',
        },
    ]);
    if (confirm) {
        if (main.path === 'pages') {
            write.sync(`./${main.path}/${main.project_name}/index.tsx`, `MY index.ts`, {
                newline: true,
            });
        } else if (main.path === 'components') {
            write.sync(`./${main.path}/${seting.file_name}/components/Module.tsx`, `MY Module.tsx`, {
                newline: true,
            });
        }
        console.log('OK');
    } else {
        console.log('!!! Fail Action !!!');
    }
})();
