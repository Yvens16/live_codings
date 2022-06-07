import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className='nav'>
      <ul className='ul'>
        <li className='li'>Home</li>
        <li id="other_color" className='li'>About</li>
        <li className='li'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar;