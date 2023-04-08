import './App.css';
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

// Header and footer
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Home page
import Home from './components/main/Home';

// Authentication
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';

// User Profile and routes
import UserProfile from './components/user/UserProfile';

//
import store from './store/Store';
import { useSelector } from 'react-redux';
import { loadUser } from './utils/actions/UserActions';
import {useNavigate} from 'react-router-dom';


function App() {
  const history = useNavigate();
  const { error, loading, isAuthenticated } = useSelector(state=> state.user);
  useEffect(()=>{
    if(isAuthenticated){
      store.dispatch(loadUser())
    } else{
    }
  }, [])
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        {isAuthenticated ?
          <>
            <Route exact path='/user/profile' element={<UserProfile/>} />
          </>  
          : <>        
            <Route exact path='/signup' element={<SignUp/>} />
            <Route exact path='/signin' element={<SignIn/>} />
          </>
        }
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
