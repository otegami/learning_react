import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import ColorProvider from './components/ColorProvider'
import App from './App';

export const ColorContext = createContext()

ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root')
);
