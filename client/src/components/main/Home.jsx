import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { loadUser } from '../../utils/actions/UserActions';
import store from '../../store/Store';

import HomeTop from './HomeTop';
import HomeBottom from './HomeBottom';
import HomeShow from './HomeShow';

const Home = () => {
  const { error, loading, isAuthenticated } = useSelector(state=> state.user);
  useEffect(()=>{
    if(isAuthenticated){
      store.dispatch(loadUser())
    } else{
    }
  }, [])
  return (
    <>
    {loading? <></>:
      <>
      {isAuthenticated ?
        <><HomeShow/></>  
        : <> 
          <HomeTop/>       
          <HomeBottom/>
        </>
      }    
    </>}

    </>

  )
}

export default Home