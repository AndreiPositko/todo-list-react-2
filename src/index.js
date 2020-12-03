import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Header/>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

