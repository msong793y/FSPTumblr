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
       

        switch (location) {
           

            case "/":
                buttonDisplay="Demo User";
                pathWay= "/signup";
                break;
           
            case "/signup":
                buttonDisplay="Sig Up";
                pathWay= "/login";
                break;

            case "/login":
                buttonDisplay="Sig Up";
                pathWay= "/signup";
                break;


            case "/dashboard":
                buttonDisplay="Get Out";
                pathWay= "/signup";
                break;

        
        }
        let button1='';
        let button2='';
        let button3 = ''; 
        let button4 = '';
        if (location === "/login"){

                                       
            button1= <img src="https://img.icons8.com/pastel-glyph/64/000000/pen.png"></img>
                    
            button2=  <img src="https://img.icons8.com/ios-filled/50/000000/menu.png"></img>
                     
                
            button3=  <img src="https://img.icons8.com/wired/64/000000/lightning-bolt.png"></img>
                     
                
            button4 = <img src="https://img.icons8.com/wired/64/000000/top-menu.png"></img>
        }
       

        return(
            <div className="NavBarMain">
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