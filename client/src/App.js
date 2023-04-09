import './App.css';
import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

// Header and footer
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Home page
import HomeTop from './components/main/HomeTop';
import HomeShow from './components/main/HomeShow';
import HomeBottom from './components/main/HomeBottom';

// Authentication
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';

// User Profile and routes
import UserProfile from './components/user/UserProfile';
import UserProfileUpdate from './components/user/UserProfileUpdate';
import PasswordUpdate from './components/user/PasswordUpdate';
import ForgotPassword from './components/user/ForgotPassword';

//
import store from './store/Store';
import { useSelector } from 'react-redux';
import { loadUser } from './utils/actions/UserActions';


function App() {
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
        {isAuthenticated ?
          <>
            <Route exact path='/' element={<HomeShow/>} />
            <Route exact path='/user/profile' element={<UserProfile/>} />
            <Route exact path='/user/profile/update' element={<UserProfileUpdate/>} />
            <Route exact path='/user/password/update' element={<PasswordUpdate/>} />
          </>  
          : <>     
            <Route exact path='/' element={<><HomeTop/><HomeBottom/></>} />
            <Route exact path='/signup' element={<SignUp/>} />
            <Route exact path='/signin' element={<SignIn/>} />
            <Route exact path='/user/password/forgot' element={<ForgotPassword/>} />
          </>
        }
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
