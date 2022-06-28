import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { BeerContext } from './BeerContext';

function SingleBeerPage() {
  const  {beerId}  = useParams();
  const [beer, setBeer] = useState(null)
  const {removeBeers, getError} =  useContext(BeerContext);
  useEffect(() => {
    const getBeer = async() => {
      try {
        const data = await fetch(`https://api.punkapi.com/v2/beers/${beerId}`)
        if (!data.ok) {
          throw new Error("L'id passer n'existe pas");
        }
        const beer = await data.json();
        setBeer(beer[0]); 
      } catch(err) {
        console.log('err:', err)
        getError(err);
      }
    }
    getBeer();
  }, [beerId])

  if(beer === null) return;
  
  return (
    <div>
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <p>{beer.description}</p>
      <h3>Se marie bien avec:</h3>
        {beer.food_pairing.map((food,idx) => (
          <p key={idx}>{food}</p>
        ))}
        <button onClick={() => removeBeers(beerId)}>Effacer la {beer.name} de la liste</button>
    </div>
  )
}

export default SingleBeerPage