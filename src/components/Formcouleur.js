import React from 'react';

const FormCouleur = ({ color, handleColorChange }) => {
  return (       
    <div className="formBonjour_couleur">
        <h1>Choisissez une couleur</h1>
        <input type="color" value={color} onChange={handleColorChange}/> <i>{color}</i> {/* Affiche la valeur hexadécimale de la couleur */}
    </div>
  );
};

export default FormCouleur;