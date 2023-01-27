import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Main from './Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Main>
        <App />
      </Main>
  </React.StrictMode>
);
