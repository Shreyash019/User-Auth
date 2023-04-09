import React from 'react';
import './css/password.css';
import '../auth/auth.css'

const ForgotPassword = () => {
  return (
    <div className='password-container'>
      <div className='password-card'>
        <h3>Forgot Password</h3>
        <form className=''>
          {/* value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} */}
          <input type="email" name='email' placeholder='Enter Your Email Address' autoComplete="off"/><br/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword