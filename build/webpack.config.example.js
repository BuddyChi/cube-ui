const { merge } = require('webpack-merge');
const BasicWebpackConfig = require('./webpack.config.base');
const {ExampleDir} = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(BasicWebpackConfig,{
    entry:{
        index: `${ExampleDir}/index.js`
    },
    output:{
        path: `${ExampleDir}/dist`,
        filename: '[name].min.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: `${ExampleDir}/index.html`,
            filename: 'index.html',
        })
    ]
})