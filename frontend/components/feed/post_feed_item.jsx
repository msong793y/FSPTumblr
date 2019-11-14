import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions'
import {destroyPost} from '../../actions/post_actions'


class PostFeedItem extends React.Component{

    constructor(props){
        super(props)
    }



    render(){

    return(
            <div className= "PostFeedItemContainer">
                <div className = "FeedItemAvator">
                    <img src="/download.jpg" className="FeedProfilePic"/>
                </div>
                <div className = "FeedItemBox">
                    <div className= "AuthorshipInfo">
                        {this.props.post.user.username}
                    </div>
                    <div className="FeedItemContent">
                        {this.props.post.body}
                        <div className="FeedMediaContainer" onClick={()=>dispatch(openModal("showContent", this.props.post.contentUrl))}>
                            <img src={this.props.post.contentUrl} />
                        </div>
                    </div>
                    <div className= "FeedItemFooterInfo">
                        
                        
                        <img src="/icons8-gear-pok-50.png" 
                        className="FeedGearIcon"
                        onClick={()=>dispatch(destroyPost(this.props.post))}
                        />
                        <br></br>
                    </div>
                </div>

            </div>
        )
    }
}

export default PostFeedItem;
