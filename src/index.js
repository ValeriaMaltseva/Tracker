import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from  'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import moment from  'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import App from './App';
import configureStore from 'redux/store';

const { store, persistor } = configureStore();

momentDurationFormatSetup(moment);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
