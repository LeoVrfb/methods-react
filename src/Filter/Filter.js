import React from 'react'

function Filter() {

   /* On va chercher à supprimer un élément d'un tableau 
      sans utiliser la méthode "delete" qui comporte certains 
      problemes 
   */

    /* Important : La méthode "sort" est une COPIE momentanée 
       du tableau mais ne change pas le tableau original. Que la
       méthode soit appelée dans une fonction ou dans le dom
       n'altère/n'inverse pas son effet. 
    */
    
    let fruits = [
        'pomme',
        'poire',
        'caillou',
        'banane'
    ]

    let fruitsFlitres = fruits.filter(fruit => {
            if(fruit !== 'caillou'){
                return true  /* idem que de retourner 'fruit'... */
            }
    })

    /* plus moderne, on écrirait : 
      let fruitsFlitres = fruits.filter(fruit => {
        return (fruit !== 'caillou')
           
        }) 
    */

let fruitUnique = fruits.filter(fruit => {
    if(fruit == 'caillou'){
        return true  /* idem que de retourner 'fruit'... */
    }
})

/* Avec fruitUnique, j'isole un fruit et je le laisse seul dans
le tableau ! */



    return (
        <div>
            <hr/>
            <b>methode filter</b>
            
            
            <p>{fruitsFlitres}</p>
            <p>{fruitUnique}</p>

            

        </div>
    )
}

export default Filter
