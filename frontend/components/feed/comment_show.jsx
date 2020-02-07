import React from 'react';
import { destroyComment}  from '../../actions/post_actions'



class PostFeedItem extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
      let button1 = null;


      if (this.props.currentUserId === this.props.comment.commentAuthor.id) {
        button1 = (
          <img
            src="/deleteComment.png"
            className=" Clickable CommentDelete"
            onClick={() => dispatch(destroyComment(this.props.comment.id))}
          />
        );

      }

        return (
          <div className="CommentShow">
            <div className="CommentTop">
                <div className="CommentAuthor">
                  {this.props.comment.commentAuthor.username}
                </div>
               {button1}
            </div>
            <div className="CommentBody">{this.props.comment.body}</div>
            <br></br>
          </div>
        );
    }
}


export default PostFeedItem;