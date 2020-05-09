import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router'
import * as serviceWorker from './serviceWorker';
import { HashRouter } from "react-router-dom";


import './css/example.css';
import './css/main.css';
import './css/list.css';

ReactDOM.render(
  <>
    <HashRouter>
      <Route />
    </HashRouter>
  </>,
  document.getElementById('container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
