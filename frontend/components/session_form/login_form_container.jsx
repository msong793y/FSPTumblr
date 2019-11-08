import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, updateLocation, errorsGone } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
    navLink: <Link to="/signup">Or Sign Up?</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    setLocation: (location) => dispatch(updateLocation(location)),
    clearErrors: ()=>dispatch(errorsGone())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
