import React from 'react';
import { Link } from 'react-router-dom';



class Navbar extends React.Component{

    constructor(props){
        super(props)
        this.state = {  
            menuDrop:"DropDownMenuItemsHidden"}
       
    }

    
    

    render(){
        const location = this.props.location.pathname;

        let pathWay=''
        let buttonDisplay='';
        let bottomBorder="";
        let logoutBotton=null;
       

            
        



        switch (location) {
           

            case "/":
                buttonDisplay="Demo User";
                pathWay= "/login";
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
                buttonDisplay="";
                pathWay= "";
                logoutBotton= 
                bottomBorder="MainNavDashboard"
                break;

                
        }
        let button1 = <a href="https://github.com/msong793y"><img  src="/icons8-github-64.png"></img></a>;
        let button2 = <a href="https://www.linkedin.com/in/miles-song/"><img className="LinkedINButtonImg" src="/icons8-linkedin-64.png"></img></a>;
        let button3 = <img src="/icons8-email-64.png"></img>; 
        let button4 = '';
        logoutBotton=<Link className= "TRBActual" to={pathWay}  >{buttonDisplay}</Link>

        let dropDownMenu = null;
        //DropDown Menu Stuff
        // let menuClass="";

        // function makeMenuVisible(){menuClass= "DropDownMenuItemsVisible",
        //                      console.log(menuClass)}

        // debugger;
       
        if (location === "/dashboard"){

                                       
            button1= <img src="/icons8-compose-64.png"  onClick={ ()=>this.props.activateModal("postingModal",null)}></img>
                    
            button2 = <a href="https://www.linkedin.com/in/miles-song/"><img className="LinkedINButtonImg" src="/icons8-linkedin-64.png"></img></a>
                     
            button3 = <a href="https://github.com/msong793y"><img src="/icons8-github-64.png"></img></a>;
                
            button4 = <img src="/icons8-homework-80.png"></img>

            logoutBotton= <img src="/icons8-exit-64.png" className="LogoutButton"  onClick={ ()=>this.props.logout()}></img>

            dropDownMenu= <ul className={`${this.state.menuDrop ===""? "DropDownMenuItemsVisible":"DropDownMenuItemsHidden" }`}>
                            {/* <li>Edit Profile Picture</li>
                            <li>Likes</li>
                            <li>Posts</li> */}
                         </ul>
        }
       
        console.log(this.state.menuDrop)
        return(
            <div className= {`NavBarMain ${bottomBorder ? "MainNavDashboard":""}`}  onMouseLeave={()=>this.setState({menuDrop: "menuGone"})} >
                <div className= "LeftNav">
                    <div className="MainIcon">
                        <Link className="logo"  to="/" >D</Link>
                    </div>
                    <div className="SearchBar">
                        <input className="SearchBarText" type= "text" placeholder="Not Functioning Search"></input>
                    </div>
                </div>
                <div className= "RightNav">
                    <div className="TopRightButtonContainer">
                        {logoutBotton}
                    </div>
                
                    <div className="PostButtonContainer">      
                        {button1}                         
                    </div>
                    <div className={`MenuButtonContainer`}  
                    onMouseEnter={()=>this.setState({menuDrop: ""})} 
                    >
                          {button2}
                          {dropDownMenu}
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