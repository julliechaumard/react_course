import React, { useState, Fragment } from "react";

function Exercice4() {

    const Form = () => {
        const [name, setName] = useState("");
        const [mail, setMail] = useState("");
    }

    return (
        <Fragment>
            <form>
            
                <input type="text" placeholder="Nom" />
                <input type="email" placeholder="Email" />
                <button type="submit">Soumettre</button>

            </form>

        </Fragment>

    )

}

export default Exercice4;