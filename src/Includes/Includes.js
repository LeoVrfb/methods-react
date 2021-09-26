import React from 'react'

function Includes() {

   /*
     Utilisation : détecte si un élémnt précis du tableau est 
     présent en renvoyant true ou false.
   */

    /* 
    Important : La méthode "Includes" ne change pas le tableau 
    original. Que la méthode soit appelée dans une fonction 
    ou dans le dom n'altère/n'inverse pas son effet. 
    */

    const tableau = 
    
    [
    "nom",
    {"nom" : "Gisele", "prix" : 4000, cool : 3000},
    {"nom" : "Gisele", "prix" : 4000, cool : 3000},
    {"nom" : "Gisele", "prix" : 4000, cool : 3000},
    {"nom" : "Gisele", "prix" : 4000, cool : 3000},
    {"nom" : "Gisele", "prix" : 4000, cool : 3000},
    
    
   ]

   
    let notes = [1,4,5,20,20];
    let estPresent = notes.includes(20);
    console.log(estPresent)

    const verif = tableau.includes("nom")
    const verif2 = tableau.includes("Gisele")

    /* Cette méthode ne fonctionne que sur des valeurs simples
    mais pas sur un objet dans un tableau.
    Ici par exemple, elle ne peut pas aller chercher la valeur
    "prix" qui est contenu dans un objet */
    
    return (
        <div>
            <hr/>
            <b>Methode includes</b>
            {estPresent && <p>Salut</p>}
            {verif ? <p>fonctionne</p> : <p>pas trouvé...</p>}
            {verif2 ? <p>fonctionne</p> : <p>pas trouvé...</p>}
        </div>
    )
}

export default Includes
