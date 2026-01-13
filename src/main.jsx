// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ഇത് ഇമ്പോർട്ട് ചെയ്യുക
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ഇതാണ് പ്രധാനം: App-നെ ഇവിടെ പൊതിയണം */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);