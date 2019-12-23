import React from 'react';
import { destroyComment}  from '../../actions/post_actions'



class PostFeedItem extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        return (
          <div className="CommentShow">
            <p className="CommentBody">{this.props.comment.body}</p>
            <h5 className="CommentAuthor">
              <div className="CommentDelete"
                onClick={() => dispatch(destroyComment(this.props.comment.id))}
              > Delete</div>
              --{this.props.comment.commentAuthor.username}
            </h5>
            <br></br>
          </div>
        );
    }
}


export default PostFeedItem;