import React from 'react'
import styles from '../nav/nav.module.css'



function nav() {
  return (
    <nav>
      <div className={styles.nav_name} >
        <a href='#.com'>Energy App</a>
      </div>
      <div className={styles.nav_links}>
        <div className={styles.link}> <a href='#.com'> home</a></div>
        <div><a href='#.com'>product</a></div>
        <div> <a href='#.com'>about us</a></div>
        <div><a href='#.com'>contact</a></div>
      </div>
    </nav>
  )
}

export default nav;
