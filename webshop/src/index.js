import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from'react-router-dom';
import {ProductProvider} from './context';
import * as serviceWorker from './serviceWorker';
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()
/*React Router*/
ReactDOM.render(
  <feedProvider>
  <ProductProvider>
    <Router>
    <App />
  </Router>
  </ProductProvider>
  </feedProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
