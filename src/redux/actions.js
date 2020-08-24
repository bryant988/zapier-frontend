// @flow
import type { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from './actionTypes';

export type IncrementCounterAction = {
  type: INCREMENT_COUNTER,
  payload: number
};

export type DecrementCounterAction = {
  type: DECREMENT_COUNTER,
  payload: number
};

export type ResetCounterAction = {
  type: RESET_COUNTER
};

export type Action = IncrementCounterAction | DecrementCounterAction | ResetCounterAction;

export type Dispatch = (action: Action) => void;

export const incrementCounter = (counter: number): IncrementCounterAction => ({
  type: 'INCREMENT_COUNTER',
  payload: counter
});

export const decrementCounter = (counter: number): DecrementCounterAction => ({
  type: 'DECREMENT_COUNTER',
  payload: counter
});

export const resetCounter = (): ResetCounterAction => ({
  type: 'RESET_COUNTER'
});
