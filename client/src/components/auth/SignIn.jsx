import React from 'react'

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <div>

        </div>
        <div>
          <form>
              <input type="email" name="email" placeholder='Email' required/> 
              <input type="password" name="password" placeholder='Password' required/>       
              <button type='submit'>Sign Up</button>      
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn