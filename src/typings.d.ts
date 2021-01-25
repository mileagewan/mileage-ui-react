import { transform } from '@babel/core';
import { any } from 'prop-types';
import { Context } from 'react';

declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare var marked: any;
declare module 'babel-standalone' {
  interface content {
    transform(arg0: any): any;
  }
  export default content;
}
