import {
	LOGIN,
	LOGOUT,
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
  } from './uiActionTypes';
  
  // Original action creators
  export function login(email, password) {
	return {
	  type: LOGIN,
	  email,
	  password,
	};
  }
  
  export const logout = () => ({ type: LOGOUT });
  
  export const displayNotificationDrawer = () => ({
	type: DISPLAY_NOTIFICATION_DRAWER,
  });
  
  export const hideNotificationDrawer = () => ({
	type: HIDE_NOTIFICATION_DRAWER,
  });
  
  // Bound action creators
  export const boundLogin = (email, password) => (dispatch) => {
	dispatch(login(email, password));
  };
  
  export const boundLogout = () => (dispatch) => {
	dispatch(logout());
  };
  
  export const boundDisplayNotificationDrawer = () => (dispatch) => {
	dispatch(displayNotificationDrawer());
  };
  
  export const boundHideNotificationDrawer = () => (dispatch) => {
	dispatch(hideNotificationDrawer());
  };
  

  export function loginSuccess() {
    return {
      type: LOGIN_SUCCESS,
    };
  }
  
  export function loginFailure() {
    return {
      type: LOGIN_FAILURE,
    };
  }
  
  export function loginRequest(email, password) {
    return (dispatch) => {
      boundLogin(email, password);
  
      return fetch('http://localhost:8567/login-success.json')
        .then((res) => res.json())
        .then((json) => dispatch(loginSuccess()))
        .catch((error) => dispatch(loginFailure()));
    };
  }