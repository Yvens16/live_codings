import React from 'react'

function NavBar() {
  // On peut passer un objet
  const liStyle = {
    color: "purple",
  }

  return (
    // Ou passer le style directement dans 2 paires d'accolades
    // Ici on remarquera qu'il n'a plus de notion de class ou d'id
    <nav style={{ backgroundColor: "black", padding: "8px 12px" }}>
      <ul style={{ listStyle: "none", color: "white", display: "flex", justifyContent:"space-between" }}>
        <li>Home</li>
        {/* On fera bien attention à passer l'objet dans une seule paire d'accolade */}
        <li style={liStyle}>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar;