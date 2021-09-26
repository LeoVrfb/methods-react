import React from 'react'

function Sort() {

    /* Utilisation : permet d'ordonner les valeurs d'un tableau 
    dans l'ordre croissant ou décroissant en faisant une COPIE 
    du tableau.
    Attention : Cette méthode est mixte. Utilisée avant le dom, 
    elle modifie le tableau ORIGINAL. Mais elle peut être utilisée
    dans une constante sans être altérée/inversée. 
     */

    const numbers = [99, 2, 150];
   
    const ordre = numbers.sort((a,b) => {
        // En gros, ça fait 99 - 2 = 97 donc 99 a un indice supérieur à 2,
        // puis 2 - 150 : -148, donc 2 a un indice inférieur à 150. 
        // C'est comme ça qu'il va classé les éléments de manière croissante.
        
                return a - b;
            })

    const myNumbers = ordre.map(liste => {
        return <li>{liste}</li>
    })
// Petite méthode map ajoutée puisqu'on est dans le thème des méthodes ;)


    const villes = [
    
        {id: 1, city: 'Shanghaï', pop: 24},
        {id: 2, city: 'Paris', pop: 100},
        {id: 3, city: 'New-York', pop: 50},
        {id: 4, city: 'London', pop: 34} 
    ]

    const ordonne = villes.sort((a,b) => a.pop - b.pop)

    const afficherVille = ordonne.map(li => {
        return <p key= {li.id}>{li.city}</p>
    })

    
    

    return (
        <div>

            <b>Methode Sort</b>
            <p>{afficherVille}</p>
            <p>{numbers}</p>
            <p>{ordre}</p>
            <p>{myNumbers}</p>     
<hr />
        </div>
    )
}

export default Sort





