import{CHANGE_LOCATION} from '../actions/session_actions'



const locationReducer = (state={}, action) => {
    Object.freeze(state);
    let newState=Object.assign({},state);
    switch (action.type) {
        case CHANGE_LOCATION:
            return newState = action.location
        default:
            return state;
    }
}

export default locationReducer;