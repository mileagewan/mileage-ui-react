// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MileageButtonReact } from '../package/index';
import 'style-loader!css-loader!less-loader!./App.less';
const marked = require('marked');
const test = require('./App.md');
import { Template } from '../template/class/Template';
export class App extends React.Component {
  state: { text: string };
  renderer: any;
  components: Map<number, React.ReactElement<any, any>> = new Map();
  constructor(props: Validation.ButtonState) {
    super(props);
    this.renderer = new marked.Renderer();
    this.state = {
      text: '按钮',
    };
  }
  componentDidMount() {
    this.components.forEach((v: any, k: number) => {
      const codeRevice: HTMLElement = document.getElementById(String(k));
      ReactDOM.render(v, codeRevice);
    });
  }
  render(): JSX.Element {
    const _this = this;
    const mdString: string[] = test.split('========');
    console.log(mdString);
    let replaceTest: string = mdString.reduce((pre: string, md: string) => {
      return (
        pre +
        md.replace(
          /:::[^]+demo[^]+```js([^]+)```[\r\n]+:::/,
          function (match: string, p1: string, offset: number) {
            _this.components.set(
              offset,
              React.createElement(Template, { name: 'testbyone' }, p1)
            );
            return `<div id=${offset.toString()}></div>`;
          }
        )
      );
    }, '');
    const __html = marked(replaceTest, {
      renderer: this.renderer,
    });
    // return <MileageButtonReact text="213" />;
    return <div dangerouslySetInnerHTML={{ __html: marked(__html) }}></div>;
  }
}
declare global {
  interface Window {
    App: any;
    React: any;
    ReactDOM: any;
  }
}

window.App = App;
