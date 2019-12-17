import { connect } from 'react-redux';
import Postbar from './postbar';
import { openModal, closeModal } from '../../actions/modal_actions';
import {fetchPosts} from '../../actions/post_actions'
import { withRouter} from "react-router-dom";




const mapStateToProp = (state)=>({
    viewing: state.location,
    currentUser: state.session.id
})


const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(updateLocation(location)),
  activateModal: (action, id) => dispatch(openModal(action, id)),
  closeModal: () => dispatch(closeModal()),
  fetchPosts: () => dispatch(fetchPosts())
});







export default withRouter(connect(mapStateToProp,mapDispatchToProps)(Postbar))