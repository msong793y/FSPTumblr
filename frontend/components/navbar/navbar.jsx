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
                buttonDisplay="Login";
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
        let button1='';
        let button2='';
        let button3 = ''; 
        let button4 = '';
        if (location === "/login"){

            

                                       
            button1= <img src="/icons8-ball-point-pen-50.png"></img>
                    
            button2=  <img src="https://img.icons8.com/ios/50/000000/menu.png"></img>
                     
            button3=  <img src="https://img.icons8.com/wired/64/000000/lightning-bolt.png"></img>
                     
                
            button4 = <img src="https://img.icons8.com/wired/64/000000/top-menu.png"></img>
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