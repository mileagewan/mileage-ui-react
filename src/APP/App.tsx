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
import { MileageButtonReact } from '../package/index';
import 'style-loader!css-loader!less-loader!./App.less';
const marked = require('marked');
const test = require('./App.md');
export class App extends React.Component {
  state: { text: string };
  renderer: any;
  components: Map<number, HTMLElement> = new Map();
  constructor(props: Validation.ButtonState) {
    super(props);
    this.renderer = new marked.Renderer();
    this.state = {
      text: '按钮',
    };
  }
  render(): JSX.Element {
    const _this = this;
    const __html = marked(
      test.replace(
        /:::[^]+demo[^]+```js([^]+)```[^]+:::/,
        function (match: string, p1: string, offset: number) {
          _this.components.set(String(offset), React.createElement());
        }
      ),
      {
        renderer: this.renderer,
      }
    );
    // return <MileageButtonReact text="213" />;
    return <div dangerouslySetInnerHTML={{ __html: marked(test) }}></div>;
  }
}
declare global {
  interface Window {
    App: any;
  }
}

window.App = App;
