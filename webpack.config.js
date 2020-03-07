const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    path: path.resolve(__dirname, './src/index.js')
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    compress: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /.js|.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ]
};
