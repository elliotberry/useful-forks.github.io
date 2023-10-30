const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: 'development',
  entry: './src/queries-logic.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: "assets", to: "assets" },
        { from: "css", to: "css" }
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
  devServer: {
    port: 8080,
  },
};




