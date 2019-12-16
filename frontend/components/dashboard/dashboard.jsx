import React from 'react';
import { Link } from 'react-router-dom';
// import CreatePostFormContainer from '../post/post_form'
import PostBarContainer from "../postbar/postbar_container"
import Feed from "../feed/feed_container"
import Follow from "../followingBar/following_bar_container"
// import {fetchPosts} from "../../actions/post_actions"



class Dashboard extends React.Component{

    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.setLocation("Dashboard");
      }

    render(){

        return (
          <div className="ContentMain">
            <div>
              <PostBarContainer />
              <Feed />
            </div>
            <div>
                <Follow/>
                
            </div>

            {/* <CreatePostFormContainer /> */}
          </div>
        );

    }


}

export default Dashboard