import React from "react";

interface NumberPickerProps {
  initialCounter: number;
}

interface NumberPickerState {
  counter: number;
}

export class NumberPicker extends React.Component<NumberPickerProps, NumberPickerState> {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.initialCounter
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  updateCounter(delta: number) {
    this.setState({
      counter: this.state.counter + delta
    });
  }

  decrementCounter() {
    this.updateCounter(-1);
  }

  incrementCounter() {
    this.updateCounter(1);
  }

  render() {
    return <div>
      <button onClick={this.incrementCounter}>+</button>
      <h1>{this.state.counter}</h1>
      <button onClick={this.decrementCounter}>-</button>
    </div>
  }
}
