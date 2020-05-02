import { WebpackConfigDev } from './WebpackConfigDev';
import { Hots } from './Hots';
const path: any = require('path');
const rm: any = require('rimraf');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
new WebpackDevServer(webpack(new WebpackConfigDev()), new Hots()).listen(
  8888,
  'localhost',
  (error: any) => {
    if (error) {
      throw error;
    }
    rm(path.join(process.cwd(), 'bundle'), (error: any) => {
      console.log('已移除bundle');
    });
  }
).host;
