import { Output, Resolve, Config } from '../interface/webpack/index';
const path: any = require('path');
const webpack: any = require('webpack');
export class WebpackConfigDev implements Config {
  devtool: string = 'eval';
  mode: string = 'development';
  entry: string[] = [
    // 'webpack-dev-server/client?http://localhost:8888',
    // 'webpack/hot/only-dev-server',
    // 'react-hot-loader/patch',/
    path.join(process.cwd(), '/build/run.js'),
  ];
  output: Output = {
    filename: 'bundle.js',
    path: path.join(__dirname, 'distDev'),
  };
  plugins: Array<any> = [new webpack.HotModuleReplacementPlugin()];
  resolve: Resolve = {
    extensions: ['js', '.jsx', '.ts'],
  };
  module = {
    rules: [
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
