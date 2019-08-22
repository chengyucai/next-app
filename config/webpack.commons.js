require('dotenv').config();
const path = require('path');
const webpack = require('webpack');

const root = path.resolve('./');
const resolveTsconfigPathsToAlias = require('./utils/resolveTsconfigPathsToAlias.js');

module.exports = {
    module: {},
    resolve: {
        alias: resolveTsconfigPathsToAlias({
            tsconfigPath: path.resolve(root, 'tsconfig.json'),
            webpackConfigBasePath: './',
        }),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                PRODUCTION_API_URL: JSON.stringify(process.env.PRODUCTION_API_URL),
                DEVELOPMENT_API_URL: JSON.stringify(process.env.DEVELOPMENT_API_URL),
            },
        }),
    ],
};
