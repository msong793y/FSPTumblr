import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { updateLocation } from '../../actions/session_actions';






const mapDispatchToProps= (dispatch) =>({

    setLocation: (location) => dispatch(updateLocation(location)),
})


export default connect(null,mapDispatchToProps)(Dashboard)