import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

export const ColorContext = createContext()

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
