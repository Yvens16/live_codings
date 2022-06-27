import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App"
import OutletExample from './Outlet'
import Message from './Message';
import NoMessage from './NoMessage'
import UrlParams from "../src/UrlParams"
import reportWebVitals from './reportWebVitals'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

//TODO: 1- COMMENCEZ PAR LIRE LE TUTO: https://reactrouter.com/docs/en/v6/getting-started/tutorial
//TODO: 2- PUIS LES CONCEPTS PRINCIPEAUX :https://reactrouter.com/docs/en/v6/getting-started/concepts
//TODO: 3- PUIS VOUS POURREZ NAVIGUER DANS LA DOC SANS SOUCIS

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* 
      DOC DU BROWSER ROUTER: https://reactrouter.com/docs/en/v6/routers/browser-router
      1- Après avoir importer notre composant BrowserRouter, on le met en parent de ce qui suit 
      2- À l'intérieur de BrowserRouter, on ajoute le composant Routes au pluriel
      3- À l'intérieur de Routes, on ajoute le ou les composants Route au singulier, pour définir nos url d'accès à nos pages 
    */}

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />


        {/*
          Déclaration d'une route utilisant un outlet permettant d'afficher un composatn qui reste sur toutes les routes (<OutletExample />)
          Et des composants qui changent selon la route (<Message />) et (<NoMessage />)
        */}
        <Route path='/outlet' element={<OutletExample />}>
          <Route path='message' element={<Message />}></Route>
          <Route path='no_message' element={<NoMessage />}></Route>
        </Route>


        {/* Déclaration d'une route avec un paramètre dynamique */}
        <Route path='/categories/:categoryId' element={<UrlParams />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
