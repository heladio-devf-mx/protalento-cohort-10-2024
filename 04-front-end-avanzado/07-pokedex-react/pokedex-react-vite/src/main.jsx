import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import RoutesIndex from '../routes/RoutesIndex.jsx';
import NavBar from './components/NavBar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <RoutesIndex />
    </BrowserRouter>
  </React.StrictMode>,
);
