import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'matchmedia-polyfill';

import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/MYPORTFOLIO2">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
