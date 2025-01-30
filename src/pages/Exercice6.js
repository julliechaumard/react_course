import React, { useState, Fragment, useRef, useEffect } from "react";
import usePersonName from './../hooks/usePersonName';
import useColor from './../hooks/useColor';
import useBoxes from './../hooks/useBoxes';
import Bonjour from './../components/Bonjour';
import FormCouleur from './../components/Formcouleur';
import CarreList from './../components/CarreList';


function Exercice6() {

    let exerciceContent6;

    const initialSalutation = "Ave"; // Définir la salutation ici
    const initialColor = "#000000";
  
  
    // Appeler le hook avec les valeurs initiales
    const { personName, personNamePersonalise, handleInputChange } = usePersonName(initialSalutation);
    const { color, handleColorChange } = useColor(initialColor);
    const { boxes, addBox, changeBoxColor,showMessage, toggleCheck, checked, animateBoxes } = useBoxes(color);


    exerciceContent6 = (
      <div className="App">
  
        <div className='formBonjour'>
  
          {/* Section pour choisir une couleur */}
          <FormCouleur 
            color={color} 
            handleColorChange={handleColorChange} 
          />
          
          <Bonjour
            personName={personName}
            personNamePersonalise={personNamePersonalise}
            handleInputChange={handleInputChange}
            color={color}
          />
  
          {/* Bouton pour ajouter des carrés */}
      
          <CarreList
            boxes={boxes}
            changeBoxColor={changeBoxColor}
            addBox={addBox}
            showMessage={showMessage}
            toggleCheck={toggleCheck}
            checked={checked}
            animateBoxes={animateBoxes}
          />
  
        </div>
  
      </div>
    );

    return exerciceContent6;

}

export default Exercice6;