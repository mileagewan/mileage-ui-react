"use strict";
exports.__esModule = true;
var WebpackConfigDev_1 = require("./WebpackConfigDev");
var Hots_1 = require("./Hots");
var WebpackDevServer = require('webpack-dev-server');
new WebpackDevServer(new WebpackConfigDev_1.WebpackConfigDev(), new Hots_1.Hots()).listen(8888, 'localhost', function (error) {
    if (error) {
        throw error;
    }
});
