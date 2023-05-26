import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './custom.scss';
import './main.css';
import { Provider } from "react-redux";
const { store } = require('./store')

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);