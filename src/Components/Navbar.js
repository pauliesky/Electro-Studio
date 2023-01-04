import  './Styles/navbar.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  // https://drive.google.com/uc?export=view&id=1xRYIQhqpS6QagwZ_PfyApp6SLrwpEviM
  // https://drive.google.com/file/d//view?usp=sharing
  const [mobile, setMobile] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div><Link to='/'><h3 className="logo"> ELECTRO LAB</h3></Link></div>
        <ul className={mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>
          <Link to='/' className='text-link' ><li>HOME</li></Link>
          <Link to='/products' className='text-link'><li>PRODUCTS</li></Link>
          <Link to='/courses' className='text-link'><li>COURSES</li></Link>
          <Link to='/register' className='text-link'><li>REGISTER</li></Link>
          <Link to='/contact' className='text-link'><li>CONTACT</li></Link>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}

export default Navbar
