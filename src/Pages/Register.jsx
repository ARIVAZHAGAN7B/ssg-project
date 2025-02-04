import React from 'react'
import "./Register.css"
import {Link} from "react-router-dom"
const Register = () => {
  return (
    <div className='main-div-register'>
      <div className='register-page'>
        <h1>Register</h1>
        <input type='name' placeholder='Username' className='register-input-name'/>
        <input type='email' placeholder='Email' className='register-input-email' />
        <input type='password' placeholder='Password' className='register-input-password'/>
        <button type="submit" className='submit-btn'>Submit</button>
        <Link to="/login" style={{marginTop:"50px",textDecoration:"none",color:"blue"}} className='login-register'>Already have a account?</Link>
      </div>
    </div>
  )
}

export default Register
