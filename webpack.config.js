const webpack = require('webpack');
const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: [
        '/dist/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/',
          }
    },
    hot: true,
    historyApiFallback: true,
    proxy: {
        '/api/**': {
          target: 'http://localhost:3000/',
          secure: false,
        },
        '/assets/**': {
          target: 'http://localhost:3000/',
          secure: false,
        },
      },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /.(css|scss)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html',
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    }
}