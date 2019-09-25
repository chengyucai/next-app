module.exports = {
    splitChunks: {
        cacheGroups: {
            reactBase: {
                name: 'reactBase',
                test: module => {
                    return /react|redux|prop-types/.test(module.context);
                },
                chunks: 'initial',
                priority: 20,
            },
            next: {
                name: 'next',
                test: module => {
                    return /next/.test(module.context);
                },
                chunks: 'initial',
                priority: 15,
            },
            // babel: {
            //     name: 'babel',
            //     test: module => {
            //         return /@babel/.test(module.context);
            //     },
            //     chunks: 'initial',
            //     priority: 10,
            // },
            common: {
                name: 'common',
                chunks: 'initial',
                priority: 5,
                minChunks: 2,
            },
        },
    },
};
