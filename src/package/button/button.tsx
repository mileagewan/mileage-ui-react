/// <reference path='../namespace/ValidationButton.ts' />
import * as React from 'react';
import 'style-loader!css-loader!less-loader!../theme/Button.less';
export class MileageButtonReact extends React.Component {
  public state: Validation.ButtonState;
  public props: Validation.ButtonProps;
  constructor(props: Validation.ButtonProps) {
    super(props);
    this.state = {
      value: props.text,
    };
  }
  getStateValue(): String {
    if (typeof this.state.value === 'function') {
      return this.state.value();
    } else {
      return this.state.value;
    }
  }
  render(): JSX.Element {
    return <button onClick={this.click}>{this.state.value}</button>;
  }
  public click = (): void => {
    let value: string | Function = this.state.value;
    this.setState({
      value: (value += '1'),
    });
  };
}
