import React from 'react';
import { Link } from 'react-router-dom';



class Splash extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="SplashMainPage">
                <div className="MainSplashWords">
                    <h1 className="SplashTitle">Dumblr</h1>
                    <h3 className="SplashTagLine">Yall gonna make me lose my mind up in here, up in here.</h3>
                </div>
                <div>
                <Link to= "/signup" className="SplashSignUpLink">Get Started</Link>
                </div>
                <Link to= "/login" className="SplashloginLink">Login</Link>

            </div>
        )
    }
}

export default Splash