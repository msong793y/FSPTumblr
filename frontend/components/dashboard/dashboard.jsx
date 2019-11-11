import React from 'react';
import { Link } from 'react-router-dom';
// import CreatePostFormContainer from '../post/post_form'
import PostBarContainer from "../postbar/postbar_container"


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
                <PostBarContainer />



                <button onClick={ ()=>this.props.activateModal("createPost")}  >Text Modal</button>

                <h2>You gonna make me act a fool.</h2>
                <h3 className="ContentTest">UP IN HERE UP IN HERE!</h3>
                
                {/* <CreatePostFormContainer /> */}
            </div>

        )

    }


}

export default Dashboard