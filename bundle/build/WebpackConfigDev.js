"use strict";
exports.__esModule = true;
var path = require('path');
var webpack = require('webpack');
var WebpackConfigDev = /** @class */ (function () {
    function WebpackConfigDev() {
        this.devtool = 'eval';
        this.mode = 'development';
        this.entry = [
            // 'webpack-dev-server/client?http://localhost:8888',
            // 'webpack/hot/only-dev-server',
            // 'react-hot-loader/patch',/
            path.join(process.cwd(), '/build/run.js'),
        ];
        this.output = {
            filename: 'bundle.js',
            path: path.join(__dirname, 'distDev')
        };
        this.plugins = [new webpack.HotModuleReplacementPlugin()];
        this.resolve = {
            extensions: ['js', '.jsx', '.ts']
        };
        this.module = {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)(\?.+)?$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.(jpe?g|png|gif)(\?.+)?$/,
                    loader: 'url-loader'
                },
                {
                    test: /\.md$/,
                    loader: 'raw-loader'
                },
            ]
        };
    }
    return WebpackConfigDev;
}());
exports.WebpackConfigDev = WebpackConfigDev;
