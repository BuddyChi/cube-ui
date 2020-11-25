const { merge } = require("webpack-merge");
const BasicWebpackConfig = require("./webpack.config.base");
const { ExampleDir, DistDir } = require("./config");
const Config = require("./config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Webpack = require('webpack');
const Path = require('path');
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
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader', 
        'css-loader', 
        'sass-loader'
      ]
    },{
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${ExampleDir}/index.html`,
      filename: "index.html",
    }),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      },
      'VERSION': JSON.stringify(`${Config.Version}`),
      'APPNAME': JSON.stringify(`${Config.Appname}`)
    }),
  ],
  resolve: {
    alias: {
      'cube': `${Config.SourceDir}/index.js`
    }
  },
});
