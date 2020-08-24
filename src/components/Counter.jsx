// @flow
import * as React from 'react';
import css from '../App.module.scss';

type CounterProps = {
  counter: number,
  onIncrement: (counter: number) => void,
  onDecrement: (counter: number) => void,
  onReset: () => void
};

const Counter = (props: CounterProps): React$Element<*> => {
  const onIncrement = () => {
    props.onIncrement(props.counter + 1);
  };

  const onDecrement = () => {
    props.onDecrement(props.counter - 1);
  };

  return (
    <header className={css['App-header']}>
      <p>counter: {props.counter}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={props.onReset}>Reset</button>
    </header>
  );
};

export default Counter;
