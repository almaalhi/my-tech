import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DropdownProvider from './context/dropdown/DropdownProvider';

ReactDOM.render(
  <React.StrictMode>
    <DropdownProvider>
      <App />
    </DropdownProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
