import { connect } from 'react-redux';
import Splash from './splash';
import { updateLocation } from '../../actions/session_actions';


const mapStateToProps = (state) => ({

    
})


const mapDispatchToProps= (dispatch) =>({

    setLocation: (location) => dispatch(updateLocation(location)),
})

export default connect(null,mapDispatchToProps)(Splash)