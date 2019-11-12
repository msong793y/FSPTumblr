import{GET_ALL_POSTS} from '../actions/post_actions'



const postsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState=Object.assign({},state);
    switch (action.type) {
        case GET_ALL_POSTS:
            newState = action.posts;
            return newState;
        default:
            return state;
    }
}

export default postsReducer;