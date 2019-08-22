// const path = require("path");
// const merge = require("webpack-merge");
// const root = path.resolve(__dirname, "../");

// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// const common = require(path.resolve(root, "config/webpack.commons.js"));

module.exports = ({ config, mode }) => {
  // const mergeConfig = merge(common, config);
  const mergeConfig = config;

  mergeConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [require.resolve("babel-preset-react-app")]
    }
  });

  mergeConfig.module.rules.push({
    test: /\.s(a|c)ss$/,
    loader: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader",
        options: {
          localIdentName: "[local]"
        }
      },
      {
        loader: "postcss-loader",
        options: {
          plugins: function() {
            return [require("autoprefixer")];
          }
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true,
          sourceMapContents: false
        }
      }
    ]
  });

  mergeConfig.resolve.extensions.push(".ts", ".tsx", ".css", ".scss");

  // mergeConfig.plugins.push(
  //   new ForkTsCheckerWebpackPlugin({
  //     async: false,
  //     checkSyntacticErrors: true,
  //     formatter: require("react-dev-utils/typescriptFormatter")
  //   })
  // );

  return mergeConfig;
};
