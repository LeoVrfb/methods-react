import React from 'react'

function FindIndex() {

    const list = [1, 2, 3, 4, 5, 6, 8, 9, 7]
    const result = list.find(nbr => nbr > 6)
    // Je cherche le premier chiffre supérieur à 6

    const resultThen = list.findIndex(nbr => nbr > 6)
    // Je cherche l'index du premier chiffre supérieur à 6 

    
/* Que la méthode soit appelée dans une fonction ou dans le dom
 n'altère/n'inverse pas son effet*/

    return (
        <div>
            <b>Methode Findindex</b>
<br/>
            {result}
<br/>
            {resultThen}
<br/>
            {list[resultThen] -= 5}

            {/* l'index 6 du tableau est le chiffre 8, 8 - 5 = 3 */}

        </div>
    )
}

export default FindIndex



