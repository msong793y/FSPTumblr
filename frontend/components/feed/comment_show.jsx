import React from 'react';



class PostFeedItem extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        return (
          <div className="CommentShow">
            <h4 className="CommentBody">{this.props.comment.body}</h4>
            <h5 className="CommentAuthor">
              --{this.props.comment.commentAuthor.username}
            </h5>
            <br></br>
          </div>
        );
    }
}


export default PostFeedItem;