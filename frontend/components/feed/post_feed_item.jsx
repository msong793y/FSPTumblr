import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions'
import {destroyPost, createLike, deleteLike} from '../../actions/post_actions'
import CommentShow from './comment_show'


class PostFeedItem extends React.Component{

    constructor(props){
        super(props)
       
    }





    render(){
        const likeObj = {};
        likeObj.post_id = this.props.post.id
        likeObj.liker_id = this.props.currentUser


        let button2 = (<img src="/icons8-heart-80.png"
            className="FeedLikeIcon"
            onClick={() => dispatch(createLike(likeObj))}
        />)

        this.props.post.postLikers.forEach( (like)=>{
            console.log(like.id)
            console.log(this.props.currentUser)
            if(like.id === this.props.currentUser){
                button2 = (<img src="/red-heart.png"
                    className="FeedLikeIcon"
                    onClick={() => dispatch(deleteLike(likeObj))}
                />)
            }

        })


        
        
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
                        {button2}
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
