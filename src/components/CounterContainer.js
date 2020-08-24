// @flow
import { connect } from 'react-redux';
import Counter from './Counter';
import { getCounter } from '../redux/selectors';
import { incrementCounter, decrementCounter, resetCounter } from '../redux/actions';
import type { State } from '../redux/reducers/counter';
import type { Dispatch } from '../redux/actions';

const mapStateToProps = (state: State): { counter: number } => {
  return {
    counter: getCounter(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): ({
  onIncrement: (counter: number) => void,
  onDecrement: (counter: number) => void,
  onReset: () => void
}) => {
  return {
    onIncrement: counter => {
      dispatch(incrementCounter(counter));
    },
    onDecrement: counter => {
      dispatch(decrementCounter(counter));
    },
    onReset: () => {
      dispatch(resetCounter());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
