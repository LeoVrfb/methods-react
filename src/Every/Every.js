import React from 'react'

function Every() {

    /* Utilisation : Vérifier que tous les éléments
    d'un tableau répondent à une condition.
    La méthode renvoie un booléen true ou false. */

     /* 
    Important : La méthode "Every" ne change pas le tableau 
    original. Que la méthode soit appelée dans une fonction 
    ou dans le dom n'altère/n'inverse pas son effet. 
    */

    const tableau = 
    
     [
     
     {"nom" : "Gisele", "prix" : 4000, cool : 3000},
     {"nom" : "Gisele", "prix" : 80, cool : 3000},
     {"nom" : "Gisele", "prix" : 4000, cool : 3000},
     {"nom" : "Gisele", "prix" : 4000, cool : 3000},
     {"nom" : "Gisele", "prix" : 4000, cool : 2000},
     
     
    ]


const resultat = tableau.every(element => {
    return element.prix > 100
})

/* Est-ce que tous les éléments du tableaux ont un prix supérieur
à 100 ? */

const resultat2 = tableau.every(element => {
    return element.cool > 1000
})

/* Est-ce que tous les éléments du tableaux ont un cool supérieur 
à 1000 ? */

    return (
        <div>
            <hr />
            <b>Methode Every</b>
            
            {resultat ? <p>Oui</p> : <p>Non</p>}
            {resultat2 ? <p>oui</p> : <p>Non</p>}
            

            
        </div>
    )
}

export default Every