import React, {useEffect, useState}  from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {login, clearErrors} from '../../utils/actions/UserActions';
import { useSnackbar } from 'notistack';
import './auth.css';


const SignIn = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const {user, error, loading, isAuthenticated } =  useSelector((state)=> state.user)
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleOnSubmit = async (e) =>{
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword))
  }
  
  useEffect(()=>{
    if(error){
      
      console.log(error)
      dispatch(clearErrors)
    }
    if(isAuthenticated){
      history('/user/profile')
    }

  },[dispatch, error, isAuthenticated])

  return (
    <>
    { loading ? 
      'Loading...': 
      <>
        <div className='auth-container'>
          <div className='auth-left'>
            <h1>Welcome</h1>
          </div>
          <div className='auth-right'>
            <h2>Sign In</h2>
            <form onSubmit={handleOnSubmit}>
              <input type="email" name='email' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}  placeholder='Email' autoComplete="off"/><br/>
              <input type="password" name='password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder='Password' autoComplete="off"/><br/>      
              <button type='submit'>Sign In</button>      
            </form>
            <p><Link to='/user/password/forgot'>Forgot Password</Link></p>
            <p>Don't have a account! <Link to='/signup'>Signup</Link></p>
          </div>
        </div>
      </>
    }
    </>
  )
}

export default SignIn