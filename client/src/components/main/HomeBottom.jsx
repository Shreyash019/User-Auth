import React from 'react';
import './css/home-bottom.css';
import {Link} from 'react-router-dom';
import signinimg from '../img/signin.png';

const HomeBottom = () => {
  return (
    <div className='home-bottom-container'>
      <div className='home-bottom-box'>
        <Link to='/signup'>
          <div className='bottom-card' style={{backgroundImage: `url(${signinimg})`}}>
            <h3>Sign Up</h3>
          </div>
        </Link>
        <Link to='/signin'>
          <div className='bottom-card' style={{backgroundImage: `url(${signinimg})`}}>
            <h3>Sign In</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HomeBottom