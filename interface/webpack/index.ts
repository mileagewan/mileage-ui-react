export interface Other {
  rules?: Array<Rule>;
}
export interface Output {
  filename: string;
  path: string;
}
export interface Resolve {
  extensions?: Array<string>;
}
export interface Rule {
  test: RegExp;
  loader?: string;
  include?: any[];
  user?: string[];
  enforce?: string;
}

export interface Config {
  devtool?: string;
  entry?: string[];
  model?: string;
  output?: Output;
  plugins?: Array<any>;
  resolve?: Resolve;
  module?: Other;
}

export interface Stats {
  colors: boolean;
}

export interface Hot {
  publicPath?: string;
  hot: boolean;
  historyApiFallback?: boolean;
  stats?: Stats;
}
