import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import App from './App';
import configureStore from './store/configure';
import './bundle.css';
import './init-libs';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={enUS}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);
