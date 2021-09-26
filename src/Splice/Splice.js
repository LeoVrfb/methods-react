import React from 'react'

function Splice() {

  /* 
    Utilisation : supprimer un elément, ajouter un élément, insérer
    un élément.
    Attention : La méthode modifie directement le tableau ORIGINAL. 
  */

    const listePays = ['Argentine', 'Pays-Bas', 'Danemark', 'Portugal']
    const listePays2 = ['Argentine', 'Pays-Bas', 'Danemark', 'Portugal']
    const listePays3 = ['Argentine', 'Pays-Bas', 'Danemark', 'Portugal']

    listePays.splice(2,1)
    listePays2.splice(2,1, 'Canada')
    listePays3.splice(2,0, 'Russie')

    /* ATTENTION : Si on met la méthode dans une constante et qu'on 
    appelle dans le dom le nom de cette constante, alors l'effet de 
    la méthode sera altéré/inversé... 
    De même si on appelle la méthode simplement dans le dom, son 
    effet est également alteré/inversé */

    return (
        <div>

            <b>Methode Sort</b>

            {/* supprimer */}
            <p>{listePays}</p>
            

            
            {/* supprimer et remplacer */}
            <p>{listePays2}</p>
            
          

            {/* Insérer sans supprimer */}
            <p>{listePays3}</p>    

<hr/>            
            
        </div>
    )
}

export default Splice
