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
import Modal from './modal/modal';
import LogoutContainer from './logout';




class App extends React.Component {

  constructor(props){
    super(props)
  }


  render(){

    const backgrounds=["/f1.jpg", "/f2.jpg", "/f3.jpg", "/f4.jpg", "/f5.jpg", "/f6.jpg"]

    const location = this.props.location.pathname
      let backgroundImage
      let setting 

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }


    if(location==="/dashboard"){
      backgroundImage= {backgroundColor: "#011834"}
      setting = "NoBackgroundImage"
    } else{ 
      let selection = getRandomInt(6)
      backgroundImage=  {backgroundImage: 'url('+backgrounds[selection]+')'}
      setting = "withBackgroundImage"
    }




    return(

      <div className="MAIN">
      <Modal />
      <header className="main-header">
        <NavbarContainer />
      </header>
      <div className= {`${setting}`} style= {backgroundImage} >
          {/* <Link to= "/signup" >Sign Up</Link> */}
          <Switch>
            <ProtectedRoute path ="/dashboard" component={DashboardContainer}/>
            <ProtectedRoute path  ="/logout" component={LogoutContainer}/>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/DOGGIE FOODIE" component={SignUpFormContainer} />
            <AuthRoute  path="/" component ={SplashContainer}/>
          </Switch>
       </div>
      

       <footer className="main-footer">
     
       </footer>
      
    </div>

    );
    
  }

}
  
  
export default App;