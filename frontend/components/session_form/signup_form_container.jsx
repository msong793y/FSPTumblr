import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, updateLocation,errorsGone } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/login">Login Instead?</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    setLocation: (location) => dispatch(updateLocation(location)),
    clearErrors: ()=>dispatch(errorsGone())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
