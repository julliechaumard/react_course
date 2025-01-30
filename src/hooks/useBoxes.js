import react, { useState, useEffect } from 'react';

const useBoxes = (color) => {
    // État pour stocker les carrés ajoutés (sous forme de tableau vide).
    const [boxes, setBoxes] = useState([]); // État pour stocker les divs
    const [showMessage, setShowMessage] = useState(false);
    const [checked, setChecked] = useState(false);
    const [animateBoxes, setAnimateBoxes] = useState([]); // Gère l'animation des carrés

    // Ajouter un carré
    const addBox = () => {
        setBoxes((prevBoxes) => {
            console.log("prevBoxes : ", prevBoxes);
            const newBoxes = [...prevBoxes, color];
            const newIndex = newBoxes.length - 1; // On prend l'index du dernier élément ajouté
            setAnimateBoxes([...animateBoxes, newIndex]);
            
            setTimeout(() => {
                setAnimateBoxes((prev) => prev.filter(index => index !== newIndex));
            }, 500); // Retire l'effet après l'animation (500ms)

            return newBoxes;
        });
        setShowMessage(true); 
    };

  
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