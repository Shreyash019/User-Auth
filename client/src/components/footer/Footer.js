import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
      <div className='footer'>
        <div className='footer-top'>
          <div className='footer-top-content'>
            <h3><Link to='/'>User-Auth </Link></h3>
            <hr/>
            <p><Link to='/'>Developer</Link></p>
            <p><Link to='/about'>About</Link></p>
          </div>
          <hr/>
        </div>     
        <div className='footer-bottom'>
          <p>@2023 User-Auth, ALl Rights Reserved.</p>
        </div>
      </div>
    );
}
