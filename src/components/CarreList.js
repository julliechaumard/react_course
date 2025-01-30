import React, { Fragment, useState, useEffect } from 'react';

const CarreList = ({ boxes, addBox, changeBoxColor,showMessage,toggleCheck, checked, animateBoxes }) => {
    console.log("animateBoxes : ", animateBoxes);
    console.log("boxes : ", boxes);
    return (
        <Fragment>
            <div>
                <h1>Ajouter des carrés</h1>
                <button onClick={() => addBox()}>Ajouter un carré</button> {/* Appelle `addBox` au clic */}
                {showMessage && (<p>Cliquer sur un carré pour lui changer sa couleur et voir l'harmonie des couleurs</p>)}
            </div>

            <div className={`carreList`}>
                {boxes.map((boxColor, index) => (
                    
                    <div className="carre" key={index}>
                        <div className={`carre ${animateBoxes.includes(index) ? 'fade-in' : ''}`} style={{backgroundColor: boxColor,}} onClick={() => document.getElementById(`color-picker-${index}`).click()}></div>
                        <input id={`color-picker-${index}`} type="color" value={boxColor} onChange={(event) => changeBoxColor(index, event.target.value)} style={{display: 'none'}}/>
                    </div>
                ))}
            </div>

            <div>
                <p>Nombre de carrés ajoutés : {boxes.length}</p>
            </div>

            {showMessage && (
                <div>
                    <label htmlFor="garder_couleur">Les couleurs vous plaisent-elles ?</label>
                    <input type="checkbox" id="garder_couleur" name="garder_couleur" onChange={toggleCheck} />
                    {checked && (
                        <div>Tu aimes les couleurs, bravo voici la liste des couleurs que tu as choisies ! <ul>{boxes.map((boxColor, index) => (<li key={index} style={{listStyle: 'none'}}>{boxColor}</li> ))}</ul></div>
                    )}
                
                </div>
            )}

        </Fragment>
    );
};

export default CarreList;