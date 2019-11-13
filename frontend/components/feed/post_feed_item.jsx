import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions'
import {destroyPost} from '../../actions/post_actions'
/*
Export a `PostIndexItem` presentational component that takes in a `post` and the 
`deletePost` action via props. The component should render an `li` containing 
the following:

1. A link to the post's show page with text of the post's title
2. A link to the post's edit page with text 'Edit'.
3. A button to delete the post.
*/

const PostFeedItem = props => (
 <div className= "PostFeedItemContainer">
     <div className = "FeedItemAvator">
        <img src="/download.jpg" className="FeedProfilePic"/>
     </div>
     <div className = "FeedItemBox">
         <div className= "AuthorshipInfo">
            {props.post.user.username}
         </div>
         <div className="FeedItemContent">
             {props.post.body}
             <div className="FeedMediaContainer" onClick={()=>dispatch(openModal("showContent", props.post.contentUrl))}>
                 <img src={props.post.contentUrl} />
             </div>
         </div>
         <div className= "FeedItemFooterInfo">
             
            
            <img src="/icons8-gear-pok-50.png" 
            className="FeedGearIcon"
            onClick={()=>dispatch(destroyPost(props.post))}
            />
            <br></br>
         </div>
     </div>

 </div>
);

export default PostFeedItem;
