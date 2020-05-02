import { Hot } from '../interface/webpack/index';
export class Hots implements Hot {
  hot: boolean = true;
  historyApiFallback?: boolean = true;
  publicPath = '/';
  stats = {
    colors: true,
  };
}
