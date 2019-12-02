import { connect } from "react-redux";
import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 50px;
  background: #CCC;
`;

class Home extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.incrementCounter(1);
  }

  decrement() {
    this.props.decrementCounter(1);
  }

  render() {
    return <Container>
      <button onClick={this.increment}>+1</button>
      <h1>{this.props.counter}</h1>
      <button onClick={this.decrement}>-1</button>
    </Container>;
  }
}

const mapStateToProps = (state) => {
  return { counter: state.value };
};

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: (value: number) => dispatch({ type: 'INCREMENT', delta: value }),
  decrementCounter: (value: number) => dispatch({ type: 'DECREMENT', delta: value })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

