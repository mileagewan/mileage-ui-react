import { Output, Resolve, Config } from '../interface/webpack/index';
const path: any = require('path');
const webpack: any = require('webpack');
class WebpackProd implements Config {
  entry: string[] = [
    // 'webpack-dev-server/client?http://localhost:8888',
    // 'webpack/hot/only-dev-server',
    // 'react-hot-loader/patch',/
    path.join(process.cwd(), '/src/APP/App.tsx'),
  ];

  output: Output = {
    filename: 'app.js',
    path: path.join(__dirname, 'prod'),
  };
  plugins: Array<any> = [new webpack.HotModuleReplacementPlugin()];
  resolve: Resolve = {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  };
  externals: any = {
    react: 'React',
    'react-dom': 'ReactDom'
  };
  module = {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        // loader: 'ts-loader',
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        // include: [path.join(__dirname, '../src')],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif)(\?.+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
    ],
  };
  constructor() {}
}

module.exports = new WebpackProd();