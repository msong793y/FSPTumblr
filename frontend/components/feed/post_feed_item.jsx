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

                        <div className="FeedMediaContainer" onClick={()=>dispatch(openModal("showContent", this.props.post.contentUrl))}>
                            <img src={this.props.post.contentUrl} />
                        </div>
                        <div className="FeedContentBody">
                             {this.props.post.body}
                        </div>
                        <div className="FeedContentHashtags">
                             {this.props.post.hastags}
                        </div>
                  
                    </div>
                    <div className= "FeedItemFooterInfo">
                        <img src="/icons8-gear-100.png" 
                        className="FeedGearIcon"
                        onClick={()=>dispatch(destroyPost(this.props.post))}
                        />
                        <img src="/icons8-heart-80.png" 
                        className="FeedLikeIcon"
                        onClick={()=>dispatch(destroyPost(this.props.post))}
                        />
                        <img src="/icons8-repeat-80.png" 
                        className="FeedReblogIcon"
                        onClick={()=>dispatch(destroyPost(this.props.post))}
                        />
                        <img src="/icons8-topic-80.png" 
                        className="FeedCommentIcon"
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
