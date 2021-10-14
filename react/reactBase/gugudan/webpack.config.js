const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // <==> production
  devtool : 'eval', // <==> hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./client'],
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR', 'last 2 chrome versions'],
              // 이 부분이 정말중요한 이유는 옛날 버전일수록 지원하기 어려워지기 때문에 babel이 할 일이 엄청 많아짐.
              // Desktop/my-reference/browsersList참고
            },
            // debug: true, <- 개발 때 사용가능 (주석해제)
          }],
          '@babel/preset-react'],
        //사실 하나의 preset은 plugin들의 모음이다. 그래서 하나의 preset도 상세한 설정이 가능함.
        plugins: [],
      },
    }],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
};