/* global Stripe */

import BPromise from 'bluebird';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import App from './App';

import './bundle.css';

import configureStore from './store/configure';
const store = configureStore();

Stripe.setPublishableKey('pk_test_PKlD56JoqROJNxZa8JoV5ILr');

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);
