import React from 'react';
import { logout } from '../actions/session_actions';
import { connect } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
  } from 'react-router-dom';


 class Modal extends React.Component {

    
      
        render(){
            logout()

            return(
                <div>
                    <Redirect to='/' />
                </div>
             )
        }
    
    

}



  
export default Modal;