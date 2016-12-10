import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import App from './App';

import 'normalize.css';
import 'antd/dist/antd.css';
import 'react-select/dist/react-select.css';
import './index.css';

import configureStore from './store/configure';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);
