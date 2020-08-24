// @flow
import type { Action } from '../actions';

export type State = {
  +counter: number
};

const initialState: State = {
  counter: 0
};

const counter = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT_COUNTER': {
      return { ...state, counter: action.payload };
    }
    case 'DECREMENT_COUNTER': {
      return { ...state, counter: action.payload };
    }
    case 'RESET_COUNTER': {
      return { ...state, counter: 0 };
    }
    default:
      return state;
  }
};

export default counter;
