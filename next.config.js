// next.config.js
const path = require("path");
const merge = require("webpack-merge");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const root = path.resolve("./");
const common = require(path.resolve(root, "config/webpack.commons.js"));

module.exports = withCSS(
  withSass({
    webpack(config) {
      // const options = {
      //   dist: "nextBuild"
      // };
      const mergeConfig = merge(common, config);
      return mergeConfig;
    },
    distDir: process.env.NODE_ENV === "production" ? "proBuild" : "devBuild",
    generateInDevMode: false
  })
);
