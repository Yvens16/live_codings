import './App.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { BeerContext } from './BeerContext'
import Beers from './Beers'
import SingleBeerPage from './SingleBeerPage'
import Error from './Error'

function App () {
  const [beers, setBeers] = useState(null)
  const [error, setError] = useState(null);
  let navigate = useNavigate()

  const removeBeers = (beerId) => {
    const filteredBeers = beers.filter(beer => beer.id !== Number(beerId))
    setBeers(filteredBeers);
    navigate('/');
  }

  const getError = (error) => {
    setError(error.toString());
  }

  useEffect(() => {
    const getBeers = async () => {
      try {
        const data = await fetch(
          'https://api.punkapi.com/v2/beers?page=1&per_ge=10'
        )
        const beers = await data.json()
        setBeers(beers)
      } catch(err) {
        // Handle Error here
        setError(error);
      }
    }
    getBeers()
  }, [error])

  return (
    <div className='App'>
      <BeerContext.Provider value={{beers, removeBeers, getError }}>
        {error && <Error error={error}/>}
          <Routes>
            <Route path='/' element={<Beers />} />
            <Route path=':beerId' element={<SingleBeerPage />} />
          </Routes>
      </BeerContext.Provider>
    </div>
  )
}

export default App
