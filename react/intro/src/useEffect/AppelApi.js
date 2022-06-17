import React, { useEffect, useState } from 'react'

function Effect2 () {
  const [name, setName] = useState('')

  useEffect(() => {
    // 1. Ne peut pas être async
    console.log('useEffect après')
    async function fetchQuotes () {
      //2. donc on doit déclarer un function async
      const promise = await fetch(
        'https://simpsons-quotes-api.herokuapp.com/quotes'
      )
      const quotes = await promise.json()
      console.log('quotes:', quotes)
      console.log(`J'ai ${quotes.length} quote`)
    }
    fetchQuotes() //3. Que l'on doit appeller juste après
  }) // Pas d'array de dépendance donc le useEffect s'éxécute à chaque affichage de mon composant

  return (
    <div>
      {console.log('composant avant')}
      <h1>Effect2 de {name}</h1>
      <button onClick={() => setName('Yvens')}>change Name 1</button>
      <button onClick={() => setName('Yohan')}>change Name 2</button>
    </div>
  )
}

export default Effect2
