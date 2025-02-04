import React from 'react'
import {Link} from "react-router-dom"
import "./Login.css"
const Login = () => {
  return (
    <div className="main-div">
        <div className='login-page'>
            <center><h1>Log In</h1></center>
            <input type='email' placeholder='Email' className='login-input-email' />
            <input type='password' placeholder='Password' className='login-input-password'/>
            <button type="submit" className='submit-btn'>Submit</button>
        <Link to="/forgot" className='forgot-password'>Forgot Password?</Link>
        </div>
    </div>
  )
}

export default Login
