import React, { useEffect } from 'react'
/**
 *
 * Le useEffect hook s'exécute après chaque affichage du composant par défault mais on peut customiser ce comportement
 * Et c'est donc pour ça que le log de "composant" apparaît avant celui de "useEffect"
 *
 * Ce hook sert à executé des effets secondaires (side effects),
 * (un évenement qui agit sur quelque chose en dehors du scope de la fonction)
 * ou qui donne un résultat différent pour le même paramètre
 * Pure function vs impure function (api call, timer browser api(document, window))
 */
function Effect1 () {
  useEffect(() => {
    console.log('useEffect')
    document.title = 'mon composant' // side-effect
  })
  return <div>{console.log('composant')}</div>
}

export default Effect1

// function pureFunction(n) {
//   return n + 2; // renvoie toujours 4 si n = 2
// }

// function impureFunction(n) {
//   return Math.floor(Math.random() * n); // renvoie un chiffre en 0 et 2 si n = 2
// }
