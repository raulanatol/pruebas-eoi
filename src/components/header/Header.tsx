import { connect } from "react-redux";
import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: cornflowerblue;
  & > button {
    margin: 5px;
  }
  
  & > span {
    font-family: Verdana, serif;
  } 
`;

class Header extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.incrementCounter(2);
  }

  decrement() {
    this.props.decrementCounter(2);
  }

  render() {
    return <Container>
      <button onClick={this.increment}>+</button>
      <span>{this.props.counter}</span>
      <button onClick={this.decrement}>-</button>
    </Container>
  }
}

const mapStateToProps = (state) => {
  return { counter: state.value };
};

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: (value: number) => dispatch({ type: 'INCREMENT', delta: value }),
  decrementCounter: (value: number) => dispatch({ type: 'DECREMENT', delta: value })
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

