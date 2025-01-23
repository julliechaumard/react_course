import React, { useState, Fragment } from "react";

function Exercice3() {

    let ExerciceContent1, ExerciceContent2, ExerciceContent3, ExerciceContent4, ExerciceContent5, ExerciceContent6;

    // États pour stocker les valeurs des champs de formulaire
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // États pour les messages (succès et erreur)
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page au moment de la soumission

        // Vérifier si tous les champs sont remplis
        if (!name || !email) {
            setError("Tous les champs doivent être remplis !");
            setMessage(""); // Pas de message de succès si erreur
            return;
        }

        // Si les champs sont remplis, afficher le message de succès
        setMessage(`Bienvenue ${name}, votre adresse e-mail est ${email}`);
        setError(""); // Réinitialiser le message d’erreur

        // Réinitialiser les champs après la soumission
        setName("");
        setEmail("");
    };
    ExerciceContent1 = (

    <div>
        <h1>Formulaire d'inscription</h1>
        {/* Formulaire */}
        <form onSubmit={handleSubmit}>
        <div>
            <label>
            Nom :
            <input
                type="text"
                value={name} // Liaison avec l’état "name"
                onChange={(e) => setName(e.target.value)} // Mise à jour de l’état "name"
            />
            </label>
        </div>
        <div>
            <label>
            E-mail :
            <input
                type="email"
                value={email} // Liaison avec l’état "email"
                onChange={(e) => setEmail(e.target.value)} // Mise à jour de l’état "email"
            />
            </label>
        </div>
        <button type="submit">Soumettre</button>
        </form>

        {/* Affichage des messages. condition : si error est true alors on fait ce qu'il y a après && */}
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Message d'erreur */}
        {message && <p style={{ color: "green" }}>{message}</p>} {/* Message de succès */}
    </div>
    );

    


    return ExerciceContent1;
    
}

export default Exercice3;