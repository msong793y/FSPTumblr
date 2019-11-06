import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        return(
            <div className="NavBarMain">
                <div className= "LeftNav">
                    <Link className="MainIcon" to="/" ><img src="https://img.icons8.com/officel/16/000000/cruise-ship.png"/></Link>
                    <input className="SearchBar" type= "text" ></input>



                </div>




            </div>
        )
    }

}

export default Navbar;