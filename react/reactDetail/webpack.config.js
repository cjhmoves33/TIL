const path = require('path');
const reactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./index']
  },

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            'react-refresh/babel'
          ]
        }
      },
    ],
  },

  plugins: [
    new reactRefreshWebpackPlugin()
  ],

  devServer: {
    devMiddleware: {
      publicPath: '/dist',
    },
    static: {
      directory: path.join(__dirname)
    },
    hot: true
  }
}