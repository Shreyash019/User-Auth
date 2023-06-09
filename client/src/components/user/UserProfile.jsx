import React, {useEffect} from 'react';
import './css/user.css';
import userpro from '../img/user1.png';

import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {clearErrors} from '../../utils/actions/UserActions';

import {BsFacebook} from 'react-icons/bs';
import {SiSnapchat} from 'react-icons/si';
import {FaBirthdayCake, FaLink} from 'react-icons/fa';
import {MdEmail, MdLocationOn, MdContactPage, MdEditSquare, MdDelete} from 'react-icons/md';
import {AiFillInstagram} from 'react-icons/ai';
import {RiImageEditFill} from 'react-icons/ri'

const UserProfile = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const { error, user, isAuthenticated } = useSelector(state=> state.user);
  
    if(!isAuthenticated){
      history('/')
    }
    console.log(user, isAuthenticated)
    useEffect(()=>{
      if(error){
        dispatch(clearErrors);
      }
    },[dispatch, error, isAuthenticated])
  return (
    <div className='user-container'>
      <div className='user-left'>
        <div className='user-left-top'>
          <img src={userpro} alt="User_Profile" />
          <span><RiImageEditFill/></span>
          <span><Link to='/user/profile/update'><MdEditSquare/></Link></span>
          <span style={{color: "rgb(255, 2, 95)"}}><MdDelete/></span><br/>
          <p><br/><Link to='/user/password/update'>Update Password</Link></p>
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
          <h1>{user.name}</h1>
          <hr/><br/>
          <p><b><MdEmail/></b>&ensp;&ensp;{user.email}</p>
          <p><b><MdContactPage/></b>&ensp;&ensp;Contact</p>
          <p><b><FaBirthdayCake/></b>&ensp;&ensp;1 Jan 2000</p>
          <p><b><MdLocationOn/></b>&ensp;&ensp;India</p>
          <p><b><FaLink/></b>&ensp;&ensp;15 Dec 2020</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile