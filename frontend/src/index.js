import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Styles
import './style/index.css'; // You can still use Home.css inside Home.js
import 'react-toastify/dist/ReactToastify.css'; // ✅ Toast styles

import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  </React.StrictMode>
);