import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App.js'
import { Provider } from 'react-redux'
import store from './store/index'
import Root from './router.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
