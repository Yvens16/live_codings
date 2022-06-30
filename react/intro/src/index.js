import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import reportWebVitals from './reportWebVitals'

// 1
import React, { createContext, useContext } from 'react'
const NameContext = createContext(null)
const AgeContext = createContext(null)

// 1- Créer le context
// 2- Remplir le context avec mes données
// 3- Utiliser les données du context

function App() {
  // 3-
  const {name} = useContext(NameContext);
  const {age} = useContext(AgeContext);
  return <div>Hello, {name} a {age} ans</div>;
}

function Info() {
  const {name} = useContext(NameContext);
  return <div>Infos de {name}</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AgeContext.Provider value={{age: 26}}>
    <NameContext.Provider value={{ name: 'Yvens' }}>
      <Info/>
      <App />
    </NameContext.Provider>
    </AgeContext.Provider>
    {/* 2- */}
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
