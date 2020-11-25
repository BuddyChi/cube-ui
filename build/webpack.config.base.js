const { ExampleDir, SourceDir, DistDir,Appname } = require("./config");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  output: {
    path: DistDir,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            css: [
              "vue-style-loader",
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                },
              },
            ],
            scss: [
              "vue-style-loader",
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true,
                },
              },
            ],
          },
          postLoaders: {
            html: "babel-loader?sourceMap",
          },
          sourceMap: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          sourceMap: true,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      }
    ],
  },
  resolve: {
    alias: {
      "@": SourceDir,
      "@styles": `${SourceDir}/styles`,
      'vue': 'vue/dist/vue.esm.js'
    },
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
