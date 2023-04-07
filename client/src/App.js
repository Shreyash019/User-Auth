import './App.css';
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

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/signup' element={<SignUp/>} />
        <Route exact path='/signin' element={<SignIn/>} />

        <Route exact path='/user/profile' element={<UserProfile/>} />
      </Routes>
      
      <Footer/>
    </>

  );
}

export default App;
