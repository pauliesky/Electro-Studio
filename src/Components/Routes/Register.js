import React from 'react'
import './Register.css'
import RegImg from '../Images/10-Applications-of-Machine-Learning-in-Oil-Gas.jpg'
import { Link } from 'react-router-dom'
import { useState } from "react";


function Register() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  

  return (

    <>
      <div>
        <div className='register'>
          <div className='register-container' >

            <div className='register-img' ><img alt='reg-img' src={RegImg}></img></div>

            <form className='form' onSubmit={handleSubmit}>
              <div><h2>Welcome to EleakTra</h2></div>
              <label>Name</label>
              <input
                type='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}/>
              <label>E-mail</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <label>Password</label>
              <input
                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)} />
              <label>Confrim Password</label>
              <input
                className='password'
                type='password'
                value={''}
                onChange={(e) => setPass(e.target.value)} />

              <div  className='register-footnote'>
                <p className='TC'><input className='ckbx' type='checkbox'/>I agree to Terms of Service and Privacy</p>
                <button className='btn'>Sign Up</button>
                <div><p>Do you have an account? <Link to='/login'>Sign In</Link></p></div>
              </div>
            </form>

          </div>

        </div>

      </div >
    </>
  )
}

export default Register