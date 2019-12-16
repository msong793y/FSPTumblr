import { connect } from "react-redux";
import Following from "./following_bar";
import { deleteFollow } from "../../actions/post_actions";

const mapStateToProp = state => ({
  currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
  deleteFollow: (follow) => dispatch(deleteFollow(follow))
});


export default
  connect(mapStateToProp, mapDispatchToProps)(Following);