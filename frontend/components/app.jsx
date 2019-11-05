import React from 'react';
import { Provider } from 'react-redux';
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


const App = () => (
    <div>
      <header>
        <Link to="/" className="header-link">
          <h1>Dumblr</h1>
        </Link>
        <div>
            <Link to= "/login" >Login</Link>
            <Link to= "/signup" >Sign Up</Link>
        </div>
      </header>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
``      </Switch>
    </div>
  );
  
  export default App;