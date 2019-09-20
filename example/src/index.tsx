import { Provider, themes } from '@stardust-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const wnd = window as any;
wnd.React1 = require('react');
require('react-dom');
wnd.React2 = require('react');
console.log('Same Version:', wnd.React1 === wnd.React2);

ReactDOM.render(
  <Provider theme={themes.teams}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
