import React, { useState, Fragment } from "react";


function Exercice3() {

    let ExerciceContent1, ExerciceContent2, ExerciceContent3, ExerciceContent4, ExerciceContent5, ExerciceContent6;


    // État pour gérer la valeur du compteur
    const [count, setCount] = useState(0);

    // Fonction pour incrémenter le compteur
    const increment = () => {
        setCount(count + 1);
    };

    // Fonction pour réinitialiser le compteur
    const reset = () => {
        setCount(0);
    };

    ExerciceContent1 = (

        <div>
        {/* Bouton pour incrémenter le compteur */}
        <button onClick={increment}>Cliquez-moi</button>
        
        {/* Bouton pour réinitialiser le compteur */}
        <button 
            onClick={reset} 
            disabled={count === 0} 
            style={{
            marginLeft: "10px",
            backgroundColor: count === 0 ? "#ccc" : "#007BFF",
            color: count === 0 ? "#666" : "#fff",
            cursor: count === 0 ? "not-allowed" : "pointer",
            }}
        >
            Réinitialiser
        </button>
        
        {/* Affichage du compteur avec changement de couleur */}
        <p style={{ color: count % 2 === 0 ? "red" : "blue" }}>
            Compteur : {count}
        </p>
        </div>
    );

    


    return ExerciceContent1;
    
}

export default Exercice3;