import React from 'react';


function Home() {
 // useState est un hook de React qui permet à un composant de 
  // 1.	Définir une valeur d’état initiale.
	// 2.	Mettre à jour cette valeur chaque fois que nécessaire.
	// 3.	Re-rendre le composant automatiquement lorsqu’on change la valeur de l’état.
  // syntaxe générale : const [state, setState] = React.useState(initialValue);
  
  // État pour stocker le nom de la personne saisie par l'utilisateur.
  // ici personName : Une variable d’état qui stocke le nom de la personne.
  // ici setPersonName : Une fonction pour mettre à jour la valeur de personName.
  // ici '' : La valeur initiale de personName est une chaîne vide.
  const [personName,setPersonName] = React.useState('');

  // État pour stocker la couleur choisie par l'utilisateur.
  // Valeur initiale : noir (#000000).
  const [color, setColor] = React.useState('#000000'); // Couleur initiale

  // État pour stocker les carrés ajoutés (sous forme de tableau vide).
  const [boxes, setBoxes] = React.useState([]); // État pour stocker les divs

  // Fonction déclenchée lorsqu'une saisie est faite dans le champ texte.
  // Met à jour l'état `personName` avec la valeur saisie.
  // event contient les informations de l’événement déclenché avec onClick
  // target Représente l’élément HTML sur lequel l’événement a eu lieu. Dans ce cas, c’est le champ de saisie <input>.
  const handleInputChange = (event) => {
    setPersonName(event.target.value);
  };


  // Fonction déclenchée lorsqu'une couleur est sélectionnée.
  // Met à jour l'état `color` avec la couleur choisie.
  // Fonction pour choisir la couleur
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  // Fonction pour ajouter un nouveau carré.

  // Ajouter un carré avec la couleur actuelle
  const addBox = () => {
    setBoxes([...boxes, color]); // Ajoute la couleur actuelle au tableau
  };


  // Changer la couleur d'un carré spécifique via un sélecteur de couleur
  const changeBoxColor = (index, newColor) => {
    const newBoxes = [...boxes];
    newBoxes[index] = newColor; // Met à jour la couleur du carré cliqué
    setBoxes(newBoxes); // Met à jour l'état
  };

  return (
  <div className="App">

    <div className='formBonjour'>

      {/* Affichage dynamique du prénom avec la couleur choisie */}
      <div className="bonjour">
        <div>
          <h1>Bonjour <span style={{ color: color }}>{personName}</span></h1>
        </div>
      </div>

      {/* Conteneur qui affiche les carrés ajoutés */}
      <div className="carreList">
          {boxes.map((boxColor, index) => (
            <div
              className="carre"
              key={index}
            >
              <div
                className="carre"
                style={{
                  backgroundColor: boxColor,
                }}
                onClick={() => document.getElementById(`color-picker-${index}`).click()} // Active l'input color masqué
              ></div>
              <input
                id={`color-picker-${index}`}
                type="color"
                value={boxColor}
                onChange={(event) => changeBoxColor(index, event.target.value)} // Met à jour la couleur via l'input
                style={{
                  display: 'none', // Masque le sélecteur de couleur
                }}
              />
            </div>
          ))}
        </div>

      {/* Champ texte pour saisir le prénom */}
      <div className="formBonjour_prenom">
        <input type="text" onChange={handleInputChange} placeholder="Entrer votre prénom"/> {/* Appelle `handleInputChange` lorsque l'utilisateur tape */}
      </div>

      {/* Affiche le nombre de carrés ajoutés */}
      <div>
        <p>Nombre de carrés ajoutés : {boxes.length}</p>
      </div>


      {/* Section pour choisir une couleur */}
      <div className="formBonjour_couleur">
        <h1>Choisissez une couleur</h1>
        <input type="color" value={color} onChange={handleColorChange}/> <i>{color}</i> {/* Affiche la valeur hexadécimale de la couleur */}
      </div>



      {/* Bouton pour ajouter des carrés */}
      <div>
        <h1>Ajoutez des carrés</h1>
        <button onClick={addBox}>Ajouter un carré</button> {/* Appelle `addBox` au clic */}
      </div>


    </div>

  </div>
  );
}

export default Home;