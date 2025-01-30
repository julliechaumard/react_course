import { Fragment, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour fermer le menu
  const closeMenu = () => setIsOpen(false);

  return (
    <Fragment>

        {/* Ajout du backdrop pour fermer en cliquant en dehors */}
        {isOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
        
        <div className="hamburger-menu">
        {/* Bouton du menu */}
            <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Affichage conditionnel du menu */}
            {isOpen && (
                <div className="menu-dropdown">
                <ul>
                    <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
                    <li><Link to="/mentions-legales" onClick={closeMenu}>Mentions légales</Link></li>
                    <li><Link to="/exercice-1" onClick={closeMenu}>Exercice 1</Link></li>
                    <li><Link to="/exercice-2" onClick={closeMenu}>Exercice 2</Link></li>
                    <li><Link to="/exercice-3" onClick={closeMenu}>Exercice 3</Link></li>
                    <li><Link to="/exercice-4" onClick={closeMenu}>Exercice 4</Link></li>
                    <li><Link to="/exercice-5" onClick={closeMenu}>Exercice 5</Link></li>
                    <li><Link to="/exercice-6" onClick={closeMenu}>Exercice 6</Link></li>
                </ul>
                </div>
            )}
        </div>
        
    </Fragment>
  );
};

export default HamburgerMenu;
