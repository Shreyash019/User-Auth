import React, {useState, useEffect }  from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../../utils/actions/UserActions";
import {UPDATE_PASSWORD_RESET} from "../../utils/constants/UserConstant";
import './css/password.css';

const PasswordUpdate = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(updatePassword(myForm)).then(()=>{
      alert('Password Updated.')
      history("/user/profile")
    })
  }

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert("Profile Updated Successfully");
      history("/user/profile");
      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error, isUpdated]);

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
        <div className='password-container'>
          <div className='password-card'>
            <h3>Password Update</h3>
            <form onSubmit={handleOnSubmit}>
              <input 
                type="password" name='oldpassword' placeholder='Your Old Password'  
                value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}
                autoComplete="off" required/>
              <br/>
              <input 
                type="password" name='newpassword' placeholder='New Password' 
                value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                autoComplete="off" required/>
              <br/>
              <input 
                type="password" name='confirmpassword' placeholder='Confirm Password' 
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="off" required/>
              <br/>
              <button type='submit'>Submit</button><br/>
              <span style={{fontSize: "0.8em"}}> <Link to='/password/forgot'>Forgot Password</Link></span><br/><br/>
            </form>
          </div>
        </div>
      </>
      )}
    </>
  )
}

export default PasswordUpdate