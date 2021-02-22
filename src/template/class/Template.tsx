import * as React from 'react';
import * as ReactDom from 'react-dom';
const marked: any = require('marked');
import { TemplateImp } from '../interface/TemplateImp';
import { transform } from 'babel-standalone';
export class Template extends React.Component implements TemplateImp {
  source: string = '';

  playerId: string = `${parseInt(Math.random() * 1e9 + '').toString(36)}`;
  props: {
    name: string | number;
    children: string;
  };
  constructor(props: any) {
    super(props);
    this.source = transform(
      `
        class Demo extends React.Component {
          ${this.props.children}
        }

        ReactDOM.render(<Demo {...context.props} />, document.getElementById('${this.playerId}'))
      `,
      {
        presets: ['es2015', 'react'],
      }
    ).code;
    new Function(this.source).apply(null, this.source);
  }

  render(): JSX.Element {
    return <div>{this.props.name}</div>;
  }
}
