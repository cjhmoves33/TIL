const path = require('path');
const reactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./client'],
  },

  module: {
    rules: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 3% in KR'],
            },
          },],
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel',
        ],
      },
      exclude: /node_modules/,
    },
    {
      test: /.s[ac]ss$/i,
      use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      exclude: /node_modules/,
    },
  ],},

  plugins: [
    new reactRefreshWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: 'style.css'
    }),
  ],

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js',
  },

  devServer: {
    devMiddleware: {
      publicPath: '/dist',
    },
    static: {
      directory: path.join(__dirname)
    },
    historyApiFallback: true,
    hot: true
  }
}