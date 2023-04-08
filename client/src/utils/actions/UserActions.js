import axios from 'axios';
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
    SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL,
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL,
    LOGOUT_SUCCESS, LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL,
    DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL, 
    CLEAR_ERRORS,
    } from '../constants/UserConstant';


export const login = (email, password)=> async(dispatch)=>{
    try{
        dispatch({ type: LOGIN_REQUEST })

        const config = { headers: { "Content-Type": "application/json" } };
        const {data} = await axios.post(`http://localhost:5000/api/v1/user/signin`, {
            email, password},
            config
        );
        dispatch({ type:LOGIN_SUCCESS, payload: data.user })
    } catch(error){
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

export const signup = (name, email, password)=> async(dispatch)=>{
    try{
        dispatch({
            type: SIGNUP_REQUEST
        });
        const config ={headers: { "Content-Type": "application/json"}}
        const {data} = await axios.post(`http://localhost:5000/api/v1/user/signup`, {
            name, email, password},
            config
        );
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: data,
        })
    } catch(error){
        dispatch({
            type: SIGNUP_FAIL,
            payload: error.response.data.message
        })
    }
}

export const logout = ()=> async(dispatch)=>{
    try{
        await axios.get(`http://localhost:5000/api/v1/user/logout`);
        dispatch({ type: LOGOUT_SUCCESS,})
    } catch(error){
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message })
    }
}

// Load User
export const loadUser = () => async (dispatch) => {
    try {
      dispatch({ type: LOAD_USER_REQUEST });
  
      const { data } = await axios.get(`http://localhost:5000/api/v1/user/profile`);
  
      dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
};


// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.put(`http://localhost:5000/api/v1/user/profile/update`, userData, config);

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Update Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(`http://localhost:5000/api/v1/user/password/update`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Clearing Error
export const clearErrors = async(dispatch)=>{
  dispatch({type:CLEAR_ERRORS})
}