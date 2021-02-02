import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import Counter from './components/counter';
import Practice from './components/practice'
import Counters from './components/counters'

//step1:
// const element=<h1>Hello world</h1>
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  // element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
