import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'; // Import des routes
import Home from './pages/Home'; // Fichier Home.js
import Legal from './pages/Legal'; // Fichier Legal.js
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './scss/app.scss';

function App() {
  return (
    <Router>
      <Header /> {/* En-tête commun à toutes les pages */}
      <AppRoutes /> {/* Routes centralisées */}
      <Footer /> {/* Pied de page commun */}
    </Router>
  );
}

export default App;