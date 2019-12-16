import { connect } from 'react-redux';
import PostFeedItem from './post_feed_item';
import { withRouter} from "react-router-dom"
import {fetchPosts} from "../../actions/post_actions"


const mapStateToProp = (state)=>({
    currentUser: state.session
    // posts: Object.values(state.entities.posts).reverse()
})


const mapDispatchToProps= (dispatch) =>({
    fetchPosts: ()=>dispatch(fetchPosts())
})





export default withRouter(connect(mapStateToProp,mapDispatchToProps)(PostFeedItem))