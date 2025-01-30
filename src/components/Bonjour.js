import React, { Fragment } from 'react';

const Bonjour = ({ personName, personNamePersonalise, handleInputChange, color }) => {
    return (
        <Fragment>
            <div className="formBonjour_prenom">
                <input type="text" onChange={handleInputChange} defaultValue="" placeholder="Entrer votre prénom"/> {/* Appelle `handleInputChange` lorsque l'utilisateur tape */}
            </div>
            <div className="bonjour">
                <div>
                    <h1>Bonjour <span style={{ color: color }}>{personName}</span></h1>
                    <h1>{personNamePersonalise.salutation} <span style={{ color: color }}> {personNamePersonalise.nom}</span></h1>
                </div>
            </div>
        </Fragment>
    );
};
  
  export default Bonjour;