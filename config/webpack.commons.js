const path = require('path');
const root = path.resolve(__dirname, '../');
const webpack = require('webpack');
const My_ptimization = require('./webpack.optimization.js');

module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            native: false,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            '@root': path.resolve(root),
            '@constants': path.resolve(root, './constants'),
            '@interfaces': path.resolve(root, './interfaces'),
            '@redux': path.resolve(root, './redux'),
            '@magaele': path.resolve(root, './magaele'),
            '@config': path.resolve(root, './config'),
            '@components': path.resolve(root, './components'),
            '@static': path.resolve(root, './static'),
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.browser': 'true',
            // 'process.env': {
            //     PRODUCTION_API_URL: JSON.stringify(process.env.PRODUCTION_API_URL),
            //     DEVELOPMENT_API_URL: JSON.stringify(process.env.DEVELOPMENT_API_URL),
            // },
        }),
    ],
    optimization: process.env.NODE_ENV === 'production' ? My_ptimization : false,
    // externals: {
    //     react: 'React',
    //     'react-dom': 'ReactDOM',
    //     'react-router': 'ReactRouter',
    // },
};
