import React, { useState } from 'react'

/**
 * Ici lorsque l'on lance la fonction synchrone, on ne peut utiiser l'input tant que la fonction
 * n'a pas fini son exécution
 *
 * Comme vous le voyez les lettres écrites dans l'input n'apparaissent qu'après la fin de la fonction
 */
function isPrime (n) {
  for (let c = 2; c <= Math.sqrt(n); ++c) {
    if (n % c === 0) {
      return false
    }
  }
  return true
}

async function generatePrimes (quota) {
  return new Promise(async(resolve) => {
    const primes = []
    const maximum = 1000000

    while (primes.length < quota) {
      await new Promise(resolve => {
        const candidate = Math.floor(Math.random() * (maximum + 1))
        if (isPrime(candidate)) {
          primes.push(candidate)
        }

      })
    }
    console.log("Hello")
    resolve(primes)
  })
}

function Aynchrone () {
  const [primes, setPrimes] = useState()



  const call = async () => {
    const p = await generatePrimes(1000000);
    setPrimes(p);
  }


  return (
    <div>
      <h1>Asynchrone</h1>
      <p>
        Vous ne pourrez écrire dans l'input qu'après que la fonction ai finit
        son exécution
      </p>
      <button onClick={() => call()}>Lancer la longue fonction</button>
      <input type='text' />
      {primes && <p>Enfin terminé de créer {primes} nombres premiers</p>}
    </div>
  )
}

export default Aynchrone
