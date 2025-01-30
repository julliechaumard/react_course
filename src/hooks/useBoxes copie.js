import react, { useState, useEffect } from 'react';

const useBoxes = (color) => {
    // État pour stocker les carrés ajoutés (sous forme de tableau vide).
    const [boxes, setBoxes] = useState([]); // État pour stocker les divs
    const [showMessage, setShowMessage] = useState(false);
    const [checked, setChecked] = useState(false);
    

    // Ajouter un carré
    const addBox = () => {
        setBoxes([...boxes, color]); // Ajoute la couleur actuelle au tableau
        setShowMessage(true); 
    };
    //console.log("boxes = ", boxes);

  
    // Changer la couleur d'un carré spécifique via un sélecteur de couleur
    const changeBoxColor = (index, newColor) => {
        const newBoxes = [...boxes];
        newBoxes[index] = newColor; // Met à jour la couleur du carré cliqué
        setBoxes(newBoxes); // Met à jour l'état
    };
  
    const toggleCheck = () => {
        setChecked(!checked);
    }

    return {
      boxes,
      addBox,
      changeBoxColor,
      showMessage,
      toggleCheck,
      checked,
      animateBoxes
    };
  };
  
  export default useBoxes;