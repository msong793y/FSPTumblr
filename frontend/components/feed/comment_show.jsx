import React from 'react';



class PostFeedItem extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        return (
          <div className="CommentShow">
            <p className="CommentBody">{this.props.comment.body}</p>
            <h5 className="CommentAuthor">
              
              --{this.props.comment.commentAuthor.username}
            </h5>
            <br></br>
          </div>
        );
    }
}


export default PostFeedItem;