// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';

// Crée le point d'entrée racine pour l'application React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rend l'application dans le DOM
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
