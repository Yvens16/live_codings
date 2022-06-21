import { useState, useEffect } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'
import './App.css'
//TODO: créer un fichier .env et ajouter votre clé gify comme ici: https://create-react-app.dev/docs/adding-custom-environment-variables
/**
 * Aller sur ce site web, se connecter et créer une clé API
 * https://developers.giphy.com/
 */
/**
 * Choisir le SDK et suivre ce qu'ils vous disent de faire
 * Une API est une interface permettant aux applis de communiquer entre elle
 * Un SDK est un ensemble d'outils et de méthodes fournit
 * Link to the gify sdk
 * SDK: https://developers.giphy.com/docs/sdk#web: il contient des méthodes pour récuperer les données et des composant pré-faits
 * API: (Ne pas utiliser, juste regarder) https://developers.giphy.com/docs/api/endpoint#search:  Ne contient que les endpoind(liens) des appel API
 *
 * https://waytolearnx.com/2018/11/difference-entre-api-et-sdk.html
 */
const gf = new GiphyFetch(process.env.REACT_APP_GIFY_API_KEY)

function GifList ({ gifList, selectGif }) {
  return (
    <div className='gifList'>
      {gifList &&
        gifList.map(gif => (
          <div
            className='gif'
            key={gif.id}
            onClick={() => selectGif(gif.images.preview_webp.url)}
          >
            <img src={gif.images.preview_webp.url} alt='gif' />
          </div>
        ))}
    </div>
  )
}
function Gif ({selectedGifUrl}) {
  return (
    <div className='selectedGif'>
      {selectedGifUrl && <img src={selectedGifUrl} alt='gif' />}
    </div>
  )
}

function App () {
  const [selectedGifUrl, setSelectedGif] = useState('')
  const [search, setSearch] = useState('')
  const [gifList, setGifList] = useState(null)

  const selectGif = async gif => {
    setSelectedGif(gif)
  }

  const fetchGifs = async () => {
    const { data: gifs } = await gf.search(search, {
      sort: 'relevant',
      limit: 10
    })
    setGifList(gifs)
  }

  const handleSearch = async e => {
    const { value } = e.target
    setSearch(value)
    await fetchGifs()
  }

  return (
    <div className='App'>
      <input type='text' value={search} onChange={handleSearch} />
      <div className='flex_container'>
        <Gif selectedGifUrl={selectedGifUrl}/>
        <GifList gifList={gifList} selectGif={selectGif} />
      </div>
    </div>
  )
}

export default App
