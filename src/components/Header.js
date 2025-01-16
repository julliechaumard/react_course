import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  let headerContent;

  headerContent = (
    <header>
      <h1>En-tête du site</h1>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/mentions-legales">Mentions légales</Link></li>
        </ul>
      </nav>
    </header>
  );


  return headerContent;


}

export default Header;