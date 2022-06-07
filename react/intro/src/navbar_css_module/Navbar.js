import React from 'react'
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      {console.log('styles:', styles)}
      {/* Ce log affiche ceci {nav: 'navbar_nav__ekS15', other_color: 'navbar_other_color__uP+PR'} */}
      <ul>
        <li>Home</li>
        <li id={styles["other_color"]}>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar;