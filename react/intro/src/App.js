import logo from './logo.svg'
import './App.css'

const arr = [
  {
    uid:1,
    name: 'Yvens',
    age: "14 ans",
    taille: '1m43'
  },
  {
    uid:2,
    name: 'Yohan',
    age: "18 ans",
    taille: '1m30'
  },
  {
    uid:3,
    name: 'Cédric',
    age: "19 ans",
    taille: '1m22'
  }
]

function NavBar (props) {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {props.children}
      <div>Séparation</div>
    </nav>
  )
}

function Presentation (props) {
  return (
    <div>
      {props.name}
      {props.age}
      {props.taille}
    </div>
  )
}

function App () {
  return (
    <div className='App'>
      {/* <NavBar/> */}
      <NavBar>
        {arr.map((person, idx) => (
          <Presentation key={person.uid} age={<span>{person.age}</span>} taille={<div>{person.taille}</div>} />
        ))}
      </NavBar>
    </div>
  )
}

export default App