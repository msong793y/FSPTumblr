import React from 'react';
import { Link } from 'react-router-dom';



class Navbar extends React.Component{

    constructor(props){
        super(props)
       
    }

    
    

    render(){
        const location = this.props.location.pathname;

        let pathWay=''
        let buttonDisplay='';
        let bottomBorder="";
       

        switch (location) {
           

            case "/":
                buttonDisplay="Demo User";
                pathWay= "/signup";
                break;
           
            case "/signup":
                buttonDisplay="Log In";
                pathWay= "/login";
                break;

            case "/login":
                buttonDisplay="Sign Up";
                pathWay= "/signup";
                break;


            case "/dashboard":
                buttonDisplay="Get Out";
                pathWay= "/signup";
                bottomBorder="MainNavDashboard"
                break;

        
        }
        let button1=<img src="/icons8-github-64.png"></img>;
        let button2=<img src="/icons8-linkedin-64.png"></img>;
        let button3 = <img src="/icons8-email-64.png"></img>; 
        let button4 = '';
        if (location === "/dashboard"){

                                       
            button1= <img src="/icons8-compose-64.png"></img>
                    
            button2=  <img src="/icons8-sidebar-menu-64.png"></img>
                     
            button3=  <img src="/icons8-lightning-bolt-80.png"></img>
                     
                
            button4 = <img src="/icons8-homework-80.png"></img>
        }
       

        return(
            <div className= {`NavBarMain ${bottomBorder ? "MainNavDashboard":""}`} >
                <div className= "LeftNav">
                    <div className="MainIcon">
                        <Link className="logo"  to="/" >D</Link>
                    </div>
                    <div className="SearchBar">
                        <input className="SearchBarText" type= "text" ></input>
                    </div>
                </div>
                <div className= "RightNav">
                    <div className="TopRightButtonContainer">
                        <Link className= "TRBActual" to={pathWay} >{buttonDisplay}</Link>
                    </div>
                
                    <div className="PostButtonContainer">      
                        {button1}                         
                    </div>
                    <div className="MenuButtonContainer">
                        {button2}
                    </div>
                    <div className="LightingButtonContainer">
                        {button3}
                    </div>
                    <div className="HomeButtonCotainer"> 
                        {button4}
                    </div>
                </div>
            </div>
        )
    }

}

export default Navbar;