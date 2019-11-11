import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component {

    constructor(props){
        super(props)
    }

    

    render(){
        return(
            <div>
                <div className="SplashMainPage">
                    <div className="MainSplashWords">
                        <h1 className="SplashTitle">Dumblr</h1>
                        <h3 className="SplashTagLine">Dawn + Dusk  //  Cities + Light</h3>
                    </div>
                    <div className="SplashLinkCT">
                        <Link className="SplashSignUpLink signUPLKTX" to= "/signup" >Get Started</Link>
                    </div>
                    <div  className="SplashLinkCT">
                        <Link className="SplashLoginLink loginlinktext"  to= "/login" >Log In</Link>
                    </div>
                    <div className="DemoUser">
                        <Link to='/'>Demo User</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash