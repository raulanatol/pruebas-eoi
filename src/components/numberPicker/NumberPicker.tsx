import React, { FC, useState } from "react";

interface NumberPickerProps {
  initialCounter?: number;
  onIncrement?: (newValue: number) => void;
}

export const NumberPicker: FC<NumberPickerProps> = (props) => {
  const [counter, setCounter] = useState(props.initialCounter || 0);

  const updateCounter = (delta: number) => setCounter(counter + delta);
  const incrementCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    if (props.onIncrement) {
      props.onIncrement(newCounter);
    }
  };

  const decrementCounter = () => updateCounter(-1);
  return <div>
    <button onClick={incrementCounter}>+</button>
    <h1>{counter}</h1>
    <button onClick={decrementCounter}>-</button>
  </div>
};
