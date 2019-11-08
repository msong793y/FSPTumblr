import { connect } from 'react-redux';
import PostForm from './post_form';
import { withRouter} from "react-router-dom"


const mapStateToProp = (state)=>({
    viewing: state.location,
    currentUser: state.session.id
})








export default withRouter(connect(mapStateToProp,null)(PostForm))