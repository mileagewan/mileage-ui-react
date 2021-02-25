import * as React from 'react';
import * as ReactDOM from 'react-dom';
const marked: any = require('marked');
import { TemplateImp } from '../interface/TemplateImp';
import { transform } from 'babel-standalone';
declare const Demo: any;
// window.React = React;
// window.ReactDOM = ReactDOM;
export class Template extends React.Component implements TemplateImp {
  source: string = '';

  playerId: string = `${parseInt(Math.random() * 1e9 + '').toString(36)}`;
  props: {
    name: string | number;
    children: string;
  };
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.source = transform(
      `
        class Demo extends React.Component {
          ${this.props.children}
        }
        ReactDOM.render(<Demo />, document.getElementById('${this.playerId}'))
      `,
      {
        presets: ['es2015', 'react'],
      }
    ).code;
    new Function(...['React', 'ReactDOM', this.source]).apply(null, [
      React,
      ReactDOM,
    ]);
  }

  render(): JSX.Element {
    return <div id={this.playerId}></div>;
  }
}
