import React from 'react';
import './css/home-top.css';
import home1 from '../img/home1.png';
import {GiRunningNinja} from 'react-icons/gi'

const HomeTop = () => {
  return (
    <div className='home-top-container'>
      <div className='home-top-left'>
        <div className='home-top-details'>
          <p>Welcome to User-Auth...</p>
          <p>Please register your self first</p>
          <p>If already registerd then</p>
          <p> Please login to use the website.</p>
          <h1 style={{fontSize: '5em', color: 'red'}}><GiRunningNinja/></h1>
        </div>
        
      </div>
      <div className='home-top-right'>
        <img src={home1} alt="Home_Page"/>
      </div>
    </div>
  )
}

export default HomeTop