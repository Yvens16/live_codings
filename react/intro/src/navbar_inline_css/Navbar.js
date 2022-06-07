import React from 'react'

function Navbar() {
  const listStyle = {
    color: "purple",
  }

  return (
    <nav style={{ backgroundColor: "black", padding: "8px 12px", color: "white", width:"100%" }}>
      <ul style={{ listStyle: "none" /** Etc... */ }}>
        <li>Home</li>
        <li style={listStyle}>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar;