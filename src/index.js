import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VERSION } from './config/config';

const storedVersion = localStorage.getItem('appVersion');

const Index = () => {
  useEffect(() => {
    if (storedVersion !== VERSION) {
      localStorage.clear();
      localStorage.setItem('appVersion', VERSION);
    }
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
