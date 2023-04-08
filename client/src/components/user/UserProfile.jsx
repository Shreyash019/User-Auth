import React from 'react';
import './css/user.css';
import userpro from '../img/user1.png';
import {BsFacebook} from 'react-icons/bs';
import {SiSnapchat} from 'react-icons/si';
import {FaBirthdayCake, FaLink} from 'react-icons/fa';
import {MdEmail, MdLocationOn} from 'react-icons/md';
import {AiFillInstagram} from 'react-icons/ai';

const UserProfile = () => {
  return (
    <div className='user-container'>
      <div className='user-left'>
        <div className='user-left-top'>
          <img src={userpro} alt="User_Profile" />
          <hr/>
        </div>
        <div className='user-left-bottom'>
          <span style={{color: "blue"}}><BsFacebook/></span>
          <span style={{color: "rgb(255, 2, 95)"}}><AiFillInstagram/></span>
          <span style={{color: "rgb(255, 225, 0)"}}><SiSnapchat/></span>
        </div>
      </div>
      <div className='user-right'>
        <div className='user-details'>
          <h1>Demian One</h1>
          <hr/><br/>
          <p><b><MdEmail/></b>&ensp;&ensp;demi@co.com</p>
          <p><b><MdLocationOn/></b>&ensp;&ensp;India</p>
          <p><b><FaBirthdayCake/></b>&ensp;&ensp;1 Jan 2000</p>
          <p><b><FaLink/></b>&ensp;&ensp;15 Dec 2020</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile