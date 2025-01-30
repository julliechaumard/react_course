import { useState } from 'react';

const usePersonName = (initialSalutation) => {
    // useState est un hook de React qui permet à un composant de 
    // 1.	Définir une valeur d’état initiale.
    // 2.	Mettre à jour cette valeur chaque fois que nécessaire.
    // 3.	Re-rendre le composant automatiquement lorsqu’on change la valeur de l’état.
    // syntaxe générale : const [state, setState] = React.useState(initialValue);

    // État pour stocker le nom de la personne saisie par l'utilisateur.
    // ici personName : Une variable d’état qui stocke le nom de la personne.
    // ici setPersonName : Une fonction pour mettre à jour la valeur de personName.
    // ici '' : La valeur initiale de personName est une chaîne vide.
    
    const [personName, setPersonName] = useState('');
    const [personNamePersonalise, setPersonNamePersonalise] = useState({
        salutation: initialSalutation,
        nom: "",
    });

    // Fonction déclenchée lorsqu'une saisie est faite dans le champ texte.
    // Met à jour l'état `personName` avec la valeur saisie.
    // event contient les informations de l’événement déclenché avec onClick
    // target Représente l’élément HTML sur lequel l’événement a eu lieu. Dans ce cas, c’est le champ de saisie <input>.
    const handleInputChange = (event) => {
        //console.log("handleInputChange  = ",event);
        setPersonName(() => (event.target.value));
        //setPersonNamePersonalise(({nom : event.target.value})); // ne fonctionne pas car efface le contenu du champ
        setPersonNamePersonalise(() => ({...personNamePersonalise, nom : event.target.value}));
    };

    return {
        personName,
        personNamePersonalise,
        handleInputChange,
    };
};

export default usePersonName;