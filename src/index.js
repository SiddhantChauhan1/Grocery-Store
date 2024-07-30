import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { CartProvider } from './context/Cart';
import Navbar from './components/Navbar';
import Middle from './components/Middle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Middle />
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

