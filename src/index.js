import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProvider from './contexts/AppProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <AppProvider>
      <App />
    </AppProvider>,
  );
