import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { updateLocation } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';







const mapDispatchToProps= (dispatch) =>({

    setLocation: (location) => dispatch(updateLocation(location)),
    activateModal: (action)=> dispatch(openModal(action)),
    closeModal: () => dispatch(closeModal())
})


export default connect(null,mapDispatchToProps)(Dashboard)