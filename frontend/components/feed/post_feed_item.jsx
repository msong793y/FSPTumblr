import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions'
import {destroyPost} from '../../actions/post_actions'
import CommentShow from './comment_show'


class PostFeedItem extends React.Component{

    constructor(props){
        super(props)
    }



    render(){
    return(
            <div className= "PostFeedItemContainer">
                <div className = "FeedItemAvator">
                    <img src="/default_profile_pic.png" className="FeedProfilePic"/>
                </div>
                <div className = "FeedItemBox">
                    <div className= "AuthorshipInfo">
                        {this.props.post.author.username}
                    </div>
                    <div className="FeedItemContent">

                        <div className="FeedMediaContainer" onClick={()=>dispatch(openModal("showContent", this.props.post.contentUrl))}>
                            <img src={this.props.post.contentUrl} />
                        </div>
                        <div className="FeedContentBody">
                             {this.props.post.body}
                        </div>
                        <div className="FeedContentHashtags">
                             {this.props.post.hashtags}
                        </div>
                        <div className = "FeedContentCommentContainer">
                            {this.props.post.postComments.map(comment=>(<CommentShow comment={comment} key={comment.id} />))}
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
                        onClick={()=>dispatch(openModal("postComment", this.props.post.id))}
                        />
                        <br></br>
                    </div>
                </div>

            </div>
        )
    }
}

export default PostFeedItem;
