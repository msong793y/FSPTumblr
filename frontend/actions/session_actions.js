import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const CHANGE_LOCATION = "CHANGE_LOCATION";

export const changeLocation = location =>({
  type: CHANGE_LOCATION,
  location
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors= (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors

})

export const updateLocation = location =>(dispatch) => (
  dispatch(changeLocation(location)))

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))),
    error => dispatch(receiveSessionErrors(error.responseJSON))
    ))


export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))),
    error => dispatch(receiveSessionErrors(error.responseJSON)))

);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ),error => dispatch(receiveSessionErrors(error.responseJSON)))
);
