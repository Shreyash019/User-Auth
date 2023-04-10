import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {signup, clearErrors} from '../../utils/actions/UserActions';
import './auth.css';

const SignUp = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, isAuthenticated } = useSelector(state=>state.user);
  const [user, setUser] = useState({
    name: '',
    email:'',
    password: ''
  })
  const handleOnChange = (e)=>{
    setUser(prev=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    dispatch(signup(user.name, user.email, user.password)).then(()=> history('/signin'))
  }

  useEffect(()=>{
    if(error){
      dispatch(clearErrors);
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
          <h2>Sign Up</h2>
            <form onSubmit={handleOnSubmit}>
            <input type="text" name='name' value={user.name} onChange={handleOnChange} placeholder='Name' autoComplete="off"/><br/>
                <input type="email" name='email' value={user.email} onChange={handleOnChange} placeholder='Email' autoComplete="off"/><br/>
                <input type="password" name='password' value={user.password} onChange={handleOnChange} placeholder='Password' autoComplete="off"/><br/>     
                <input type="text" name="confirm_password" placeholder='Confirm Password' required/>  
                <button type='submit'>Sign Up</button>      
            </form>
            <p>Already have a account! <Link to='/signin'>Signin</Link></p>
          </div>
        </div>
      </>
    }

    </>

  )
}

export default SignUp