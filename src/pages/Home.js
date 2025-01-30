import React, {useState} from 'react';
import usePersonName from './../hooks/usePersonName';
import useColor from './../hooks/useColor';
import useBoxes from './../hooks/useBoxes';
import Bonjour from './../components/Bonjour';
import FormCouleur from './../components/Formcouleur';
import CarreList from './../components/CarreList';

function Home() {

  const initialSalutation = "Ave"; // Définir la salutation ici
  const initialColor = "#000000";


  // Appeler le hook avec les valeurs initiales
  const { personName, personNamePersonalise, handleInputChange } = usePersonName(initialSalutation);
  const { color, handleColorChange } = useColor(initialColor);
  const { boxes, addBox, changeBoxColor,showMessage, toggleCheck, checked, animateBoxes } = useBoxes(color);
  let homeContent;

  homeContent = (
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
    
  return homeContent;
}

export default Home;