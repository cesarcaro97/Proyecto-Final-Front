import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import DataProvider from './context/DataContext/Provider';
import ViewProvider from './context/ViewContext/Provider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ViewProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </ViewProvider>
  </React.StrictMode>
);
