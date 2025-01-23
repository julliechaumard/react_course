import {React, Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'; // Import des routes
import {Header} from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './scss/app.scss';

function App() {
  return (
    <Router>
      <Header /> {/* En-tête commun à toutes les pages */}
      <AppRoutes /> {/* AppRoutes est  utilisé pour organiser et gérer toutes les routes (les associations entre les chemins URL et les composants à afficher) de l’application */}
      <Footer /> {/* Pied de page commun */}
    </Router>
  );
}

export default App;