import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.setLocation("Splash")
      }

    render(){
        return(
            <div>
                <div className="SplashMainPage">
                    <div className="MainSplashWords">
                        <h1 className="SplashTitle">Dumblr</h1>
                        <h3 className="SplashTagLine">Yall gonna make me lose my mind up in here, up in here.</h3>
                    </div>
                    <div className="SplashSignUpLink">
                        <Link className="SplashSignUpLink" to= "/signup" >Get Started</Link>
                    </div>
                    <div  className="SplashLoginLink">
                        <Link className="SplashLoginLink loginlinktext"  to= "/login" >Login</Link>
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