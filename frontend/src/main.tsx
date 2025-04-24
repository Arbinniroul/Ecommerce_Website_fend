import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './index.css';
import Layout from './modules/Layout';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Layout/> 
    </Router>
  </StrictMode>,
);