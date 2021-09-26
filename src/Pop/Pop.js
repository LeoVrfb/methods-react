import React from 'react'

function Pop() {
    /* Utilisation : Supprimer un élément à la fin du tableau. 
    Agit directement sur le tableau ORIGINAL.
    Attention : La méthode modifie directement le tableau ORIGINAL. */

    const demo = [1,2,3,4,5,6,7,8,9];
    demo.pop();

      /* ATTENTION : Si on met la méthode dans une constante et qu'on 
    appelle dans le dom le nom de cette constante, alors l'effet de 
    la méthode sera altéré/inversé... 
    De même si on appelle la méthode simplement dans le dom, son 
    effet est également alteré/inversé */


    return (
        <div>
            <p>pop : {demo}</p>
        </div>
    )
}

export default Pop
