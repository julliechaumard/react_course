import React, { Fragment } from "react";

const names = ["Alice", "Bob", "Charlie"];

function Exercice2() {

    let ExerciceContent1, ExerciceContent2, ExerciceContent3, ExerciceContent4, ExerciceContent5, ExerciceContent6;


    

    ExerciceContent1 = (
        <div>
            <h1>Liste des noms</h1>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <p>Nombre total de nom = {names.length}</p>
        </div>
       
    );

    


    return ExerciceContent1;
    
}

export default Exercice2;