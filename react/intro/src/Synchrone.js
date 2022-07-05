import React, { useState } from 'react'

/**
 * Ici lorsque l'on lance la fonction synchrone, on ne peut utiiser l'input tant que la fonction
 * n'a pas fini son exécution
 *
 * Comme vous le voyez les lettres écrites dans l'input n'apparaissent qu'après la fin de la fonction
 */

function Synchrone () {
  const [primes, setPrimes] = useState()
  function generatePrimes (quota) {
    function isPrime (n) {
      for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
          return false
        }
      }
      return true
    }

    const primes = []
    const maximum = 1000000

    while (primes.length < quota) {
      const candidate = Math.floor(Math.random() * (maximum + 1))
      if (isPrime(candidate)) {
        primes.push(candidate)
      }
    }

    console.log("primes", primes)

    setPrimes(primes)
  }
  return (
    <div>
      <h1>Synchrone</h1>
      <p>
        Vous ne pourrez écrire dans l'input qu'après que la fonction ai finit
        son exécution
      </p>
      <button onClick={() => generatePrimes(1000000)}>
        Lancer la longue fonction
      </button>
      <input type='text' />
      {primes && <p>Enfin terminé de créer {primes} nombres premiers</p>}
    </div>
  )
}

export default Synchrone
