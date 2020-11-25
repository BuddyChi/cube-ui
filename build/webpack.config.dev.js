const { merge } = require("webpack-merge");
const BasicWebpackConfig = require("./webpack.config.base");
const { ExampleDir, DistDir } = require("./config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Path = require('path')
module.exports = merge(BasicWebpackConfig, {
  devServer: {
    port: "3000",
    hot: true,
    contentBase:  Path.join(__dirname, 'dist'),
    index:'index.html'
  },
  mode:'development',
  entry: {
    index: `${ExampleDir}/index.js`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${ExampleDir}/index.html`,
      filename: "index.html",
    }),
  ],
});
