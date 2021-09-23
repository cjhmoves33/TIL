// require(''), module.exports = {}는 node에서 지원하는 문법.
// webpack.config.js에서는 babel이 적용되지 않기 때문에 import export로 라이브러리를 불러오는 등은 할 수없다.
// babel이 import로만 불러올 수 있는 것들을 require로 바꿔준다.

const path = require('path');
const refreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: 'development', // 배포시 production
  devtool: 'eval',  // 배포시 hidden-source-map
  resolve: {
    // resolve는 webpack이 알아서 경로, 확장자명을 처리할 수 있게 해준다.
    extensions: ['.js', '.jsx', '.css', '.scss'],
    // extensions는 확장자명을 처리해준다.
  },

  entry: {
    app: ['./client'], // client.jsx이지만 extensions에 jsx확장자를 등록했기 때문에 안써줘도 무관.
    // 그리고 client.jsx로 컴포넌트를 모아줄 것이기 때문에 지금은 client.jsx만 있으면 된다.
  },

  module: {
    rules: [{
      test: /.jsx?$/,
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
          'react-refresh/babel',
        ],
      },
      exclude: /node_modules/
      // exclude는 babel로 컴파일하지 않을 폴더나 파일을 지정
      // 보통 node_modules를 지정하는데 대부분 라이브러리가 배포돨 때 이미 컴파일하기 때문.
    },
    {
      test: /.s[ac]ss$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      exclude: /node_modules/
    },
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
      publicPath :'/dist',
    },
    static: {
      directory: path.join(__dirname),
    },
    hot: true
  }
  
}