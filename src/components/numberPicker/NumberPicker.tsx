import React from "react";

interface NumberPickerState {
  counter: number;
}

export class NumberPicker extends React.Component<{}, NumberPickerState> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrementCounter() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return <div>
      <button onClick={this.incrementCounter}>+</button>
      <h1>{this.state.counter}</h1>
      <button onClick={this.decrementCounter}>-</button>
    </div>
  }
}
