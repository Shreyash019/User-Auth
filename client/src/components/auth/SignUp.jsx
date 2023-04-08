import React from 'react';
import './auth.css';

const SignUp = () => {
  return (
    <>
      <div className='auth-container'>
        <div className='auth-left'>
          <h1>Welcome</h1>
        </div>
        <div className='auth-right'>
        <h2>Sign Up</h2>
          <form>
              <input type="text" name="name" placeholder='Name' required/>
              <input type="email" name="email" placeholder='Email' required/> 
              <input type="password" name="password" placeholder='Password' required/>      
              <input type="text" name="confirm_password" placeholder='Confirm Password' required/>  
              <button type='submit'>Sign In</button>      
          </form>
        </div>
      </div>
    </>

  )
}

export default SignUp