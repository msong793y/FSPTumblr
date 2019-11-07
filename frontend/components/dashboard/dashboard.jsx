import React from 'react';
import { Link } from 'react-router-dom';



class Dashboard extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.setLocation("Dashboard")
      }

    render(){

        return(
            <div className="ContentMain">

                <h1>LOGGED IN, WOOF WOOF</h1>

                <h2>You gonna make me act a fool.</h2>
                <h3 className="ContentTest">UP IN HERE UP IN HERE!</h3>

            </div>

        )

    }


}

export default Dashboard