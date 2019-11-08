import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import DashboardContainer from './dashboard/dashboard_container';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal'


const App = (props) => (
    <div className="MAIN">
      <Modal />
      <header className="main-header">
        <NavbarContainer />
      </header>
      <div className="middle">
          {/* <Link to= "/signup" >Sign Up</Link> */}
          <Switch>
            <ProtectedRoute path ="/dashboard" component={DashboardContainer}/>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute  path="/" component ={SplashContainer}/>
          </Switch>
       </div>
      

       <footer className="main-footer">
     
       </footer>
      
    </div>

  );
  
  export default App;