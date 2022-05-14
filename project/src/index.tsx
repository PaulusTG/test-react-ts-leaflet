import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

// const root = document.getElementById('root');
// if (!root) {
//   throw new Error('Failed to find the root element');
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
