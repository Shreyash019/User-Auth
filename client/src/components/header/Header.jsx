import React from 'react';
import './header.css';
import { Link} from 'react-router-dom';

const Header = () => {
  return (
    <div id='header-container'>
      <div id='header-left-content'>
      <Link to="/"><span>User-Auth</span></Link>
      </div>
      <div id='header-right-content'>
      <span><Link to="/signin">Sign In</Link></span>
        <span><Link to="/signup">Sign Up</Link></span>
      </div>
    </div>
  )
}

export default Header