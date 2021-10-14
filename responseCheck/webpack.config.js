// require(''), module.exports = {}는 node문법이다.
// webpack.config에서는 babel이 적용되지 않기 때문에 import 나 export등은 사용할 수 없다.

const path = require('path');
const refreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const devMode = process.env.NODE_ENV !== "production";


module.exports = {
  mode: 'development', // 배포시 production
  devtool: 'eval', // 배포시 hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'], // 아래에서 .js, .jsx확장자를 안써도 된다.
  },

  entry: {
    app: ['./client'], // ./client.jsx로 컴포넌트를 모으기 때문에 아직은 ./client.jsx만 있으면 된다.
  },

  module: { //공식문서에는 이 부분이 rules라고 지칭한다.
    rules: [{
      test: /.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR'],
            },
          }],
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel'
        ],
      },
    },
    {
      test: /\.s[ac]ss$/i,
      use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      exclude: /node_modules/
    }
  ],
  },

  plugins: [
    new refreshWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  // .concat(devMode ? [] : [new MiniCssExtractPlugin()]),

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js',
  },

  devServer: {
    devMiddleware: {
      publicPath: '/dist',
    },
    static: {
      directory: path.resolve(__dirname),
    },
    hot: true
  }
}