import { connect } from 'react-redux';
import PostForm from './post_form';
import { withRouter } from "react-router-dom"
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPosts, newPost } from "../../actions/post_actions"



const mapStateToProp = (state) => ({
    viewing: state.location,
    currentUser: state.session.id,
    username: Object.values(state.entities.users)[0].username,
    contentType: state.modal.id
})


const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    newPost: (post) => dispatch(newPost(post)),
    activateModal: (action) => dispatch(openModal(action)),
    closeModal: () => dispatch(closeModal())
})







export default withRouter(connect(mapStateToProp, mapDispatchToProps)(PostForm))