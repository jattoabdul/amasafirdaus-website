import jwt from 'jsonwebtoken';
import axios from 'axios';
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    SET_CURRENT_USER,
    REMOVE_CURRENT_USER,
    LOGOUT_USER } from '../constants';


export function loginUser() {
    return {
      type: LOGIN_USER
    };
}

export function loginUserSuccess(token) {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: token
    };
}

export function loginUserFail(errorloggingUser) {
    return {
        type: LOGIN_USER_FAIL,
        payload: errorloggingUser
    };
}

export function setCurrentUser(currentUserData) {
    return {
        type: SET_CURRENT_USER,
        payload: currentUserData
    };
}

export function removeCurrentUser() {
    return {
        type: REMOVE_CURRENT_USER
    };
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    };
}

export const onLoginUser = (identifier, password) => async(dispatch) => {
    dispatch(loginUser());
    const data = {
        identifier,
        password
    };
    try {
        const response = await axios.post('/users/signin', data);
        dispatch(loginUserSuccess(response.data));
        // sessionStorage.setItem('user', JSON.stringify(loginRes));
        sessionStorage.setItem('token', response.data.token);
  
        const token = response.data.token;
        const decodedToken = jwt.decode(token);
        dispatch(setCurrentUser(decodedToken));
      } catch (error) {
        dispatch(loginUserFail(error));
      }
}


export const onLogoutUser = () => (dispatch) => {
    sessionStorage.removeItem('token');
    dispatch(logoutUser());
    dispatch(removeCurrentUser());
  };
