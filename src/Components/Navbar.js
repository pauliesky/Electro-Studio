import React, { useState } from 'react'
import styles from './Styles/navbar.module.css'
import { Link } from 'react-router-dom';

function Navbar() {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => {
    setClick(false)
  } 
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <Link to='/' className={styles.navbar_name}>ELETROLAB STUDIO </Link>
          <div className='menu-icon' onClick={handleClick} >
            <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>HOME</Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}> PRODUCTS</Link>
            </li>
            <li className='nav-item'>
              <Link to='/courses' className='nav-links' onClick={closeMobileMenu}> COURSES</Link>
            </li>
            <li className='nav-item'>
              <Link to='/register' className='nav-links' onClick={closeMobileMenu}> REGISTER</Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}> CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
