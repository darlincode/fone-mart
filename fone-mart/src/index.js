import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fontawesome';
import $ from "jquery";
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from './context';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
<ProductProvider>
  <Router>
    <App />
 </Router>
</ProductProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
   