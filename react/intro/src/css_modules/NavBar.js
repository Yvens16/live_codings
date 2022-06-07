import React from 'react'
import styles from './navbar.module.css'
// Faire attention à bien nommer son fichier [name].module.css/[name].module.scss/[name].module.sass
// Que sont les Modules CSS: https://css-tricks.com/css-modules-part-1-need/
// Documentation: https://github.com/css-modules/css-modules
function NavBar () {
  return (
    <nav className={styles.nav}>
      {/* {console.log(styles)}
          LE LOG AFFICHE: cette objet avec des class uniques crées les rendant accessibles que dans ce composant
        {nav: 'navbar_nav__XD7HG',
        ul: 'navbar_ul__O6EjC', 
        li: 'navbar_li__NrZxr', 
        other_color: 'navbar_other_color__FCSm9'}
      */}
      <ul className={styles.ul}>
        <li className={styles.li}>Home</li>
        <li id={styles['other_color']} className={styles.li}>
          About
        </li>
        <li className={styles.li}>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar
