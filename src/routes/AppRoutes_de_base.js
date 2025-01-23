import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Legal from '../pages/Legal';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Page d'accueil */}
      <Route path="/mentions-legales" element={<Legal />} />
    </Routes>
  );
}

export default AppRoutes;