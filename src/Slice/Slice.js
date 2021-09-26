import React from 'react'

function Slice() {

/* Utilisation : permet de faire une COPIE du tableau en isolant
 certaines valeurs.
 Le premier argument commence à compter à partir du début du tableau,
et le second commence à compter depuis la fin */

const Texte = 'Lorem ipsum'

const variante1 = Texte.slice(0,2)

const tableau = [1, 2, 3, 4, 5, 6] 

const Select1 = tableau.slice(1,-2)
const Select2 = tableau.slice(-1, 6)


 /* Que la méthode soit appelée dans une constante ou dans le dom
 n'altère/n'inverse pas son effet*/

    return (

        <div>
<hr/>
            <b>Methode Slice</b>

           <p>{variante1}</p>
           <p>{Select1}</p>
           <p>{Select2}</p>

<hr/> 
           
        </div>
    )
}

export default Slice
 