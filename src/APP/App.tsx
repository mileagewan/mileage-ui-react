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
export class App extends React.Component {
  state: { text: string };
  constructor(props: Validation.ButtonState) {
    super(props);
    this.state = {
      text: '按钮',
    };
  }
  render(): JSX.Element {
    return <MileageButtonReact text="213" />;
  }
}
declare global {
  interface Window { App: any; }
}

window.App = App
