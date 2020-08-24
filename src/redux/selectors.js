// @flow
import type { State } from './reducers/counter';

export const getCounter = (store: State) : number => store.counter;
