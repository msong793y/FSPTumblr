import { connect } from 'react-redux';
import Feed from './feed';
import { withRouter} from "react-router-dom"
import {fetchPosts} from "../../actions/post_actions"


const mapStateToProp = (state)=>({
    posts: Object.values(state.entities.posts).reverse()
})


const mapDispatchToProps= (dispatch) =>({
    fetchPosts: ()=>dispatch(fetchPosts())
})





export default withRouter(connect(mapStateToProp,mapDispatchToProps)(Feed))