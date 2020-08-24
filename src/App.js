// @flow
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import css from './App.module.scss';
import CounterContainer from './components/CounterContainer';

const App = (): React$Element<*> => {
  return (
    <Provider store={store}>
      <div className={css['App']}>
        <CounterContainer />
      </div>
    </Provider>
  );
};

export default App;
