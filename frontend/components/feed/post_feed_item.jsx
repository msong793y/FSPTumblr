import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions'
import { destroyPost, createLike, deleteLike, createFollow, deleteFollow, fetchSomePosts} from '../../actions/post_actions'
import CommentShow from './comment_show'
import AudioPlayer from "react-h5-audio-player";



class PostFeedItem extends React.Component{

    constructor(props){
        super(props)
       
    }



    // reblogPost() {

    //     const post = this.props.post;
    //     post.op_name = this.props.post.author.username
    //     post.author_id = this.props.currentUser;



    //     const formData = new FormData();
    //     formData.append('post[body]', this.props.post.body);
    //     formData.append('post[author_id]', this.props.currentUser);
    //     console.log(this.props.post.content)
    //     formData.append('post[content]', this.props.post.content);
    //     formData.append('post[op_name]', this.props.post.author.username);
       
    //     $.ajax({
    //         url: '/api/posts',
    //         method: 'POST',
    //         data: formData,
    //         contentType: false,
    //         processData: false
    //     })
    //         .then(fetchPosts())


    // }





    render(){
        let button1 = null;

        if(this.props.currentUser.id=== this.props.post.author_id){
            button1 = (
              <img
                src="/icons8-trash-64.png"
                className="FeedGearIcon Clickable"
                onClick={() => dispatch(destroyPost(this.props.post))}
              />
            );
            
        }


        const likeObj = {};
        likeObj.post_id = this.props.post.id
        likeObj.liker_id = this.props.currentUser.id


        let button2 = (<img src="/icons8-heart-80.png"
            className="FeedLikeIcon Clickable"
            onClick={() => dispatch(createLike(likeObj))}
        />)

        this.props.post.postLikers.forEach( (like)=>{
           
            if(like.id === this.props.currentUser.id){
                button2 = (
                  <img
                    src="/red-heart.png"
                    className="FeedLikeIcon Clickable"
                    onClick={() => dispatch(deleteLike(likeObj))}
                  />
                );
            }

        })

        

        const follow = {};
        follow.following_id = this.props.post.author_id;
        follow.follower_id = this.props.currentUser.id;

         let button3 = (
           <img
             src="/icons8-repeat-80.png"
             className="FeedReblogIcon Clickable"
             onClick={() => dispatch(createFollow(follow))}
           />
         );

        this.props.currentUser.followings.forEach(following=>{
            if(following.id === this.props.post.author_id){
                button3 = (
                  <img
                    src="/icons8-synchronize-64.png"
                    className="FeedReblogIcon Clickable"
                    onClick={() => dispatch(deleteFollow(follow))}
                  />
                );

            }

        })

        // this.props.post.postLikers.forEach(like => {
        //   if (like.id === this.props.currentUser) {
        //     button2 = (
        //       <img
        //         src="/red-heart.png"
        //         className="FeedLikeIcon"
        //         onClick={() => dispatch(deleteLike(likeObj))}
        //       />
        //     );
        //   }
        // }
        // );



    let feeditem=null;

    if(this.props.post.hashtags==="photo"){

        feeditem = (
          <div
            className="FeedMediaContainer Clickable"
            onClick={() =>
              dispatch(openModal("showContent", this.props.post.contentUrl))
            }
          >
            <img src={this.props.post.contentUrl} />
          </div>
        );
    }
    
    if(this.props.post.hashtags==="audio"){

        feeditem = (
          <div
            className="FeedMediaContainer"
            // onClick={() =>
            //   dispatch(openModal("showContent", this.props.post.contentUrl))
            // }
          >
           
                <AudioPlayer src={this.props.post.contentUrl} />
          </div>
        );
    }
    
    if(this.props.post.hashtags==="video"){

        feeditem = (
          <div className="FeedMediaContainer">
            <video controls>
              <source src={this.props.post.contentUrl} />
            </video>
          </div>
        );
    }  
    
        

        //reblog button
    


        
        
    return (
      <div className="PostFeedItemContainer">
        <div
          className="FeedItemAvator Clickable"
          onClick={() => dispatch(fetchSomePosts(this.props.post.author_id))}
        >
          <img src="/default_profile_pic.png" className="FeedProfilePic" />
        </div>
        <div className="FeedItemBox">
          <div
            className="AuthorshipInfo Clickable"
            onClick={() => dispatch(fetchSomePosts(this.props.post.author_id))}
          >
            {this.props.post.author.username}
          </div>
          <div className="FeedItemContent">
            {feeditem}
            <p className="FeedContentBody">{this.props.post.body}</p>
            <div className="FeedContentCommentContainer">
              {this.props.post.postComments.map(comment => (
                <CommentShow comment={comment} key={comment.id} currentUserId={this.props.currentUser.id} />
              ))}
            </div>
          </div>
          <div className="FeedItemFooterInfo">
            {button1}
            {button2}
            {button3}
            <img
              src="/icons8-topic-80.png"
              className="FeedCommentIcon Clickable"
              onClick={() =>
                dispatch(openModal("postComment", this.props.post.id))
              }
            />
            <br></br>
          </div>
        </div>
      </div>
    );
    }
}

export default PostFeedItem;
