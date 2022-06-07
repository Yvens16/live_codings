import React from 'react'
import './navbar.css'

function NavBar () {
  return (
    <nav>
      {/* Ici on peut sélectionner sans mettre de classe aussi c'est juste pour l'example */}
      <ul className='ul'>
        <li className='li'>Home</li>
        <li id="other_color" className='li'>About</li>
        <li className='li'>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar
