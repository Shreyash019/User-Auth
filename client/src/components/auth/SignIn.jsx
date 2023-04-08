import React from 'react';
import './auth.css';


const SignIn = () => {
  return (
    <>
      <div className='auth-container'>
        <div className='auth-left'>
          <h1>Welcome</h1>
        </div>
        <div className='auth-right'>
          <h2>Sign In</h2>
          <form>
              <input type="email" name="email" placeholder='Email' required/> 
              <input type="password" name="password" placeholder='Password' required/>       
              <button type='submit'>Sign In</button>      
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn