import { WebpackConfigDev } from './WebpackConfigDev';
import { Hots } from './Hots';
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
new WebpackDevServer(webpack(new WebpackConfigDev()), new Hots()).listen(
  8888,
  'localhost',
  (error) => {
    if (error) {
      throw error;
    }
  }
);
