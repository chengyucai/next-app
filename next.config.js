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
            distDir: process.env.NODE_ENV === 'production' ? 'proBuild' : '.next',
            generateInDevMode: false,
            webpack(config) {
                config.module.rules.push({
                    test: /\/config\/generate\/.*.tsx$/,
                    loader: 'ignore-loader',
                });
                const mergeConfig = merge(common, config);
                return mergeConfig;
            },
        }),
    ),
);
// module.exports.push(withBundleAnalyzer({}));
