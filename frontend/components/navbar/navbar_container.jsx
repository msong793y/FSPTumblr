import { connect } from 'react-redux';
import Navbar from './navbar';
import { withRouter} from "react-router-dom"



const mapStateToProp = (state)=>({
    viewing: state.location,
    currentUser: state.session.id
})









export default withRouter(connect(mapStateToProp,null)(Navbar))