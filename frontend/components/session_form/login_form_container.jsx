import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, updateLocation } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    setLocation: (location) => dispatch(updateLocation(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
