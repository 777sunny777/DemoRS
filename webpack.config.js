const webpack = require('webpack');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const DEV_PATH = path.resolve(ROOT_PATH, 'dev/');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build/');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  watch: false,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    compare: path.resolve( DEV_PATH, 'compare')
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    historyApiFallback: true,
    watchContentBase: true,
    inline: true,
    port: 10007,
    open : true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(DEV_PATH)
        ],
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'compare react select',
      template: './dev/index.html'
    })
  ]
};
