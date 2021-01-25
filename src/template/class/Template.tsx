import * as React from 'react';
import * as ReactDom from 'react-dom';
const marked: any = require('marked');
import { TemplateImp } from '../interface/TemplateImp';
import { transform } from 'babel-standalone';
export class Template extends React.Component implements TemplateImp {
  source: string = '';
  constructor(props: any) {
    super(props);
    this.source = transform();
  }
  render(): JSX.Element {
    return <div></div>;
  }
}
