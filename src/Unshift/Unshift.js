import React from 'react'

function Unshift() {

   /* 
    Utilisation : Ajouter un élément au début du tableau.
    un élément.
    Attention : La méthode modifie directement le tableau ORIGINAL. 
  */

    const demo = [1,2,3,4,5,6,7,8,9];
    demo.unshift(99);

    /* ATTENTION : Si on met la méthode dans une constante et qu'on 
    appelle dans le dom le nom de cette constante, alors l'effet de 
    la méthode sera altéré/inversé... 
    De même si on appelle la méthode simplement dans le dom, son 
    effet est également alteré/inversé */

    return (
        <div>
           <p>unshift : {demo}</p> 
            
        </div>
    )
}

export default Unshift