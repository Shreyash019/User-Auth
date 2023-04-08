import React, {useEffect}  from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {logout, clearErrors} from '../../utils/actions/UserActions';
import './header.css';

const Header = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  // const [isLoaded, setLoaded] = useState(true)
  const { error, loading, isAuthenticated } = useSelector(state=> state.user);

  const handleLogout =(e) =>{
    e.preventDefault();
    alert('Logout')
    dispatch(logout()).then(()=>history('/'))
  }

  useEffect(()=>{
    dispatch(clearErrors);
    if(isAuthenticated===false){
      history('/')
    }
  },[dispatch, error, isAuthenticated])
  return (
    <div className='header-container'>
      <div className='header-left-content'>
      <Link to="/"><span>User-Auth</span></Link>
      </div>
      <div className='header-right-content'>
        { !isAuthenticated && 
          <>
            <span><Link to="/signin">Sign In</Link></span>
            <span><Link to="/signup">Sign Up</Link></span> 
          </>
        }
        {
          isAuthenticated && <span><Link to='/' onClick={handleLogout}>Logout</Link></span>
        }
        { isAuthenticated && isAuthenticated ?
          <>
            <span><Link to='/user/profile'>Profile</Link></span>
          </>
          : <></>
        }
      </div>
    </div>
  )
}

export default Header