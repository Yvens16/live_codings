import { BeerContext } from './BeerContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

function Beers () {
  const { beers } = useContext(BeerContext);
  let navigate = useNavigate()

  const goToBeerPage = beerId => {
    navigate(`${beerId}`)
  }
  return (
    <div>
      {beers &&
        beers.length &&
        beers.map(beer => (
          <div key={beer.id} onClick={() => goToBeerPage(beer.id)}>
            <h1>{beer.name}</h1>
            <img src={beer.image_url} alt={`${beer.name}`} />
          </div>
        ))}
    </div>
  )
}

export default Beers
