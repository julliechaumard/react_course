import react, { useState } from 'react';

const useColor = (initialColor) => {
    // État pour stocker la couleur choisie par l'utilisateur.
    const [color, setColor] = useState(initialColor); // Couleur initiale

    // Fonction déclenchée lorsqu'une couleur est sélectionnée.
    // Met à jour l'état `color` avec la couleur choisie.
    // Fonction pour choisir la couleur
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return {
        color,
        handleColorChange
    };

};

export default useColor;