import { connect } from 'react-redux';
import Postbar from './postbar';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter} from "react-router-dom";




const mapStateToProp = (state)=>({
    viewing: state.location,
    currentUser: state.session.id
})


const mapDispatchToProps= (dispatch) =>({

    setLocation: (location) => dispatch(updateLocation(location)),
    activateModal: (action)=> dispatch(openModal(action)),
    closeModal: () => dispatch(closeModal())
})







export default withRouter(connect(mapStateToProp,mapDispatchToProps)(Postbar))