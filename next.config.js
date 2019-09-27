// next.config.js
const path = require('path');
const merge = require('webpack-merge');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const root = path.resolve('./');
const common = require(path.resolve(root, 'config/webpack.commons.js'));
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.NODE_ENV === 'production',
});
module.exports = withBundleAnalyzer(
    withCSS(
        withSass({
            target: 'serverless',
            cssModules: true,
            cssLoaderOptions: {
                importLoaders: 1,
                localIdentName: '[local]_[hash:base64:5]',
            },
            // distDir: process.env.NODE_ENV === 'production' ? 'proBuild' : '.next',
            generateInDevMode: false,
            webpack(config) {
                config.module.rules.push({
                    test: /\/config\/generate\/.*.tsx$/,
                    loader: 'ignore-loader',
                });
                config.node = {
                    fs: 'empty',
                };
                const mergeConfig = merge(common, config);
                return mergeConfig;
            },
        }),
    ),
);
// module.exports.push(withBundleAnalyzer({}));
