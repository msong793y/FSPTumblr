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
                pathWay=
        
            default:
                buttonDisplay="hello";
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




            </div>
        )
    }

}

export default Navbar;