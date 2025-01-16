import React, { useEffect } from 'react';


function Counter(props) {


  //=========================================
  // DÉCLARATION DES VARIABLES
  //=========================================

  // La variable `depart` initialise la valeur de départ du compteur.
  // - `props.depart` est une valeur passée en tant que propriété au composant.
  // - `parseInt(props.depart || 0)` :
  //   - Si `props.depart` est défini, on le convertit en entier (au cas où ce serait une chaîne).
  //   - Si `props.depart` n'est pas fourni ou est `undefined`, on utilise la valeur par défaut `0`.
  var depart = parseInt(props.depart || 0); // "props.depart || 0" permet d'initialiser à l a valeur 0 si l'attribut depart n'est pas présent.
  let counterContent;
  const [count, setCount] = React.useState(depart);

  React.useEffect(function() {
    var timer = setInterval(function() {
        setCount(count+1);
        console.log("count = ", count);
    }, 1000)

    return function() {
        clearInterval(timer);
    }
  });

  // Fonction pour formater le temps
  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (totalSeconds < 60) {
      return `${seconds} secondes`;
    } else if (totalSeconds < 3600) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} et ${seconds} seconde${seconds > 1 ? "s" : ""}`;
    } else if (totalSeconds < 24 * 3600) {
      return `${hours} heure${hours > 1 ? "s" : ""} ${minutes} minute${minutes > 1 ? "s" : ""} et ${seconds} seconde${seconds > 1 ? "s" : ""}`;
    } else {
      return `${days} jour${days > 1 ? "s" : ""} ${hours} heure${hours > 1 ? "s" : ""} ${minutes} minute${minutes > 1 ? "s" : ""} et ${seconds} seconde${seconds > 1 ? "s" : ""}`;
    }
  };

  //=========================================
  // HTML DE LA PAGE
  //=========================================

  counterContent = (
    <div>
        <p>Vous regarder cette page depuis : <strong>{formatTime(count)}</strong>.</p>
        <p>On a un peu triché car on a démarré le timer à {depart} 😇</p>
    </div>
  );
  
  //=========================================
  // RETURN
  //=========================================
  return counterContent;
}

export default Counter;