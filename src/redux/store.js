// @flow
import { createStore } from 'redux';
import counter from './reducers/counter';
import type { Store } from 'redux';
import type { State } from './reducers/counter';
import type { Action } from './actions';

const store: Store<State, Action> = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
