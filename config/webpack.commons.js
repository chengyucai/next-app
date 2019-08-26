const path = require("path");
const root = path.resolve(__dirname, "../");

module.exports = {
  module: {},
  resolve: {
    alias: {
      "@root": path.resolve(root),
      "@constants": path.resolve(root, "./constants"),
      "@interfaces": path.resolve(root, "./interfaces"),
      "@redux": path.resolve(root, "./redux"),
      "@magaele": path.resolve(root, "./magaele"),
      "@components": path.resolve(root, "./components")
    }
  }
  // plugins: [
  //   new webpack.DefinePlugin({
  //     "process.env": {
  //       PRODUCTION_API_URL: JSON.stringify(process.env.PRODUCTION_API_URL),
  //       DEVELOPMENT_API_URL: JSON.stringify(process.env.DEVELOPMENT_API_URL)
  //     }
  //   })
  // ]
};
