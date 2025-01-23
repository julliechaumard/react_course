import {React, Fragment} from 'react';
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
          <li><Link to="/exercice-1">Exercice 1</Link></li>
          <li><Link to="/exercice-2">Exercice 2</Link></li>
          <li><Link to="/exercice-3">Exercice 3</Link></li>
          <li><Link to="/exercice-4">Exercice 4</Link></li>
        </ul>
      </nav>
    </header>
  );


  return headerContent;


}

export {Header};