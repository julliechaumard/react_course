import React, {Fragment}  from 'react';

const title = "EXERCICE 1";
const showTitle = false;

function Exercice1() {

    let ExerciceContent1, ExerciceContent2, ExerciceContent3, ExerciceContent4, ExerciceContent5, ExerciceContent6;

    // fonction qui va gérer l'événement
	const handleClick = (e) => {
		alert("J'ai cliqué sur le titre");
	}

	function Title (props) {
		console.log(props);
		//const { color, taille, children, hidden } = props;
        if (props.hidden) { // hidden est à true car il est présent dans les propriétés du composant.
            return null
        }
		return <h1 style={{color : props.color, fontSize: props.taille}}>{props.children}</h1>
	}

    ExerciceContent1 = (
        <div>
            <h1 id="title" className="rouge">EXERCICE 1</h1>
            <p> Ceci est un paragraphe </p>
        </div>
    );

    ExerciceContent2 = (
        <Fragment>
            <h1 id="title" className="rouge">EXERCICE 1</h1>
            <p> Ceci est un paragraphe </p>
        </Fragment>
    );

    ExerciceContent3 = (
        <div>
            <h1 onClick={handleClick} id="title" className="roug">{title}</h1>
            <input type="text"/>
            <p> Ceci est un paragraphe </p>
        </div>
    );

    ExerciceContent4 = (
        <div>
            {
		        showTitle ? 
				<h1 onClick={handleClick} id="title" className="roug">{title}</h1> : 
			    <p>demo</p>
			}
            <input type="text"/>
            <p> Ceci est un paragraphe </p>
        </div>
    );

    ExerciceContent5 = (
        <div>
            {showTitle && <h1 onClick={handleClick} id="title" className="roug">{title}</h1>}
            <input type="text"/>
            <p> Ceci est un paragraphe </p>
        </div>
    );

    ExerciceContent6 = (
        <div>


            <Title color="red" taille="80px">EXERCICE 1FFF - Mon composant</Title> {/*appel de la fonction Title avec des paramètre*/}
            
            <input type="text"/>
            <p> Ceci est un paragraphe </p>
        </div>
    );


    return ExerciceContent6;
    
}

export default Exercice1;