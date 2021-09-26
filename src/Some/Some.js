import React from 'react'

function Some() {

    /* Utilisation : Trouver un élément en fonction d'une condition.
    La méthode renvoie un booléen true ou false. */

     /* 
    Important : La méthode "Some" ne change pas le tableau 
    original. Que la méthode soit appelée dans une fonction 
    ou dans le dom n'altère/n'inverse pas son effet. 
    */

    const tableau = 
    
     [
     
     {"nom" : "Gisele", "prix" : 4000, cool : 3000},
     {"nom" : "Gisele", "prix" : 4000, cool : 3000},
     {"nom" : "Gisele", "prix" : 4000, cool : 3000},
     {"nom" : "Gisele", "prix" : 4000, cool : 3000},
     {"nom" : "Gisele", "prix" : 4000, cool : 3000},
     
     
    ]


const resultat = tableau.some(element => {
    return element.prix > 3000
})

/* Y a t-il des prix supérieurs à 3000 ? */

const resultat2 = tableau.some(element => {
    return element.cool > 1000
})

/* Y a t-il des cool supérieurs à 1000 ? */

    return (
        <div>
            <hr />
            <b>Methode Some</b>
            
            {resultat && <p>focntionne</p>}
            {resultat2 && <p>focntionne</p>}
            

            
        </div>
    )
}

export default Some