import { Output, Resolve, Config } from '../interface/webpack/index';
const path: any = require('path');
const webpack: any = require('webpack');
const miniCss: any = require('mini-css-extract-plugin');
const components = require(path.join(
  process.cwd(),
  '/src/package/component.json'
));
let entrys: any = {};
for (const k in components) {
  entrys[k] = path.join(process.cwd(), components[k]);
}
console.log(entrys);
class WebpackProd implements Config {
  entry: any = entrys;

  output: Output = {
    filename: '[name].js',
    path: path.join(__dirname, 'prod'),
  };
  plugins: Array<any> = [
    new webpack.HotModuleReplacementPlugin(),
    new miniCss({
      filename: '[name].css',
    }),
  ];
  resolve: Resolve = {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  };
  externals: any = {
    react: 'React',
    'react-dom': 'ReactDom',
  };
  mode: string = 'production';
  module = {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        // loader: 'ts-loader',
        use: ['awesome-typescript-loader'],
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
        use: [miniCss.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [miniCss.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: [miniCss.loader, 'css-loader', 'sass-loader'],
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
