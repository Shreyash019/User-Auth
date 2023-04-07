import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <div>

        </div>
        <div>
          <form>
              <input type="text" name="name" placeholder='Name' required/>
              <input type="email" name="email" placeholder='Email' required/> 
              <input type="password" name="password" placeholder='Password' required/>      
              <input type="text" name="confirm_password" placeholder='Confirm Password' required/>  
              <button type='submit'>Sign In</button>      
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp