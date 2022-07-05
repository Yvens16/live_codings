import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Synchrone from './Synchrone'
// import Asynchrone from "./Asynchrone";
/**
 * La programmation asynchrone est une technique permettant d'éxecuter de longues tâches
 * tout en étant toujours capable d'effectuer d'autre actions avant la fin de la tâche
 *
 * Un example de méthode asynchrone est la méthode fetch, elle permet de faire des requêtes api
 * sans pour autant bloquer l'utilisation de l'application
 */

function App () {
  const [data, setState] = useState();
  const functionAsync = async() => {
    const data = await fetch();
    setState(data)
    const data2 = await fetch()
    console.log("Heloo");
  }

  const async2 = () => {
    fetch()
    .then(data => {
      setState(data)
    })
  }

  const getReq = () => {
    setTimeout(() => {
      console.log('settimeout')
    }, 10000)
  }
  useEffect(() => {
    getReq()
  }, [])

  return (
    <div className='App'>
      <h1>{data && data}</h1>
      {/* <Synchrone /> */}
    </div>
  )
}

export default App
