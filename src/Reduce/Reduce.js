import React from 'react'

function Reduce() {

    

    const tableau = 
    
     [
     
     {"nom" : "Gisele", "prix" : 4000, cool : 3000},
     {"nom" : "Gisele", "prix" : 4000, cool : 3000},
     {"nom" : "Gisele", "prix" : 4000, cool : 3000},
     {"nom" : "Gisele", "prix" : 4000, cool : 3000},
     {"nom" : "Gisele", "prix" : 4000, cool : 3000},
     
     
    ]


const resultat = tableau.reduce((accumulateur, element) => {
    return accumulateur + element.prix
}, 0)

const resultat2 = tableau.reduce((accumulateur, element) => {
    return accumulateur + element.cool 
}, 0)

    return (
        <div>
            <hr />
            <b>Methode reduce</b>
            
            <p>{resultat}</p>
            <p>{resultat2}</p>

            
        </div>
    )
}

export default Reduce
