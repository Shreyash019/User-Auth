import React from 'react';
import './css/password.css';

const PasswordUpdate = () => {
  return (
    <div className='password-container'>
    <div className='password-card'>
      <h3>Password Update</h3>
      <form>
        {/* value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} */}
        <input type="password" name='old_password' placeholder='Your Old Password' autoComplete="off"/><br/>
        <input type="password" name='new_password' placeholder='New Password' autoComplete="off"/><br/>
        <input type="password" name='confirm_password' placeholder='Confirm Password' autoComplete="off"/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  </div>
  )
}

export default PasswordUpdate