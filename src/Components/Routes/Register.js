import React from 'react'
import './Register.css'
import RegImg from '../Images/10-Applications-of-Machine-Learning-in-Oil-Gas.jpg'

function Register() {
  return (
    <>
      <div>
        <div className='register'>
          <div className='register-container' >

            <div className='register-img' ><img alt='reg-img' src={RegImg}></img></div>

            <form className='form'>
              <div><h2>Welcome to EleakTra</h2></div>
              <label>Name</label>
              <input
                type='text'
                value={''}
                onChange={''} />
              <label>E-mail</label>
              <input
                type='text'
                value={''}
                onChange={''} />
              <label>Password</label>
              <input
                type='text'
                value={''}
                onChange={''} />
              <label>Confrim Password</label>
              <input
                className='pass'
                type='text'
                value={''}
                onChange={''} />

              <div  className='register-footnote'>
                <p className='TC'><input className='ckbx' type='checkbox'/>I agree to Terms of Service and Privacy</p>
                <button className='btn'>Sign Up</button>
                <div><p>Do you have an account? Sign In</p></div>
              </div>
            </form>

          </div>

        </div>

      </div >
    </>
  )
}

export default Register