import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DropdownState from './context/dropdown/DropdownState';

ReactDOM.render(
  <React.StrictMode>
    <DropdownState>
      <App />
    </DropdownState>
  </React.StrictMode>,
  document.getElementById('root')
);
