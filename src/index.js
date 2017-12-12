import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'

// import Root from './router.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
