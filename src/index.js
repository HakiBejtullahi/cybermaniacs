import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './context';
import App from './App';
import './styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
