import { connect } from 'react-redux';
import postingModal from './postingModal';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter} from "react-router-dom";




const mapStateToProp = (state)=>({
  
})


const mapDispatchToProps= (dispatch) =>({

    activateModal: (action,id)=> dispatch(openModal(action,id)),
    closeModal: () => dispatch(closeModal())
})







export default withRouter(connect(mapStateToProp,mapDispatchToProps)(postingModal))