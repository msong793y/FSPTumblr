import React from 'react';
import { Link } from 'react-router-dom';
import PostFeedItem from './post_feed_item';
import PostFeedItemContainer from './post_feed_item_container'



class PostBar extends React.Component {

    constructor(props){
        super(props)
        // this.props.fetchPosts()

    }

    componentDidMount(){
        this.props.fetchPosts()
    }

    

    render(){


        return(
            <div className="FeedMain">

                {this.props.posts.map((post=>(
                    <PostFeedItemContainer post={post} key={post.id} />
                )))}
                    
            </div>
        )
    }
}

export default PostBar;