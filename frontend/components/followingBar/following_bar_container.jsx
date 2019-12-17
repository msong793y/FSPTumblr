import { connect } from "react-redux";
import Following from "./following_bar";
import { deleteFollow, fetchSomePosts,fetchPosts } from "../../actions/post_actions";

const mapStateToProp = state => ({
  currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
  deleteFollow: follow => dispatch(deleteFollow(follow)),
  fetchSomePosts: user_id => dispatch(fetchSomePosts(user_id)),
  fetchPosts: () => dispatch(fetchPosts())
});


export default
  connect(mapStateToProp, mapDispatchToProps)(Following);