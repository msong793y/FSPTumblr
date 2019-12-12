
import * as APIUtil from '../util/post_api_util';


export const GET_ALL_POSTS = "GET_ALL_POSTS"


const getAllPosts = (posts)=>({
    type: GET_ALL_POSTS,
    posts
})

export const receiveSessionErrors= (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  
  })


export const fetchPosts = ( )=>(dispatch)=>(
    APIUtil.fetchAllPosts().then(posts=>(dispatch(getAllPosts(posts))))

)

export const newPost = (post) => (dispatch)=>(
    APIUtil.createPost(post).then(posts=> (dispatch(getAllPosts(posts)
    ))))

export const destroyPost=(post)=>(dispatch)=>{
    return( APIUtil.deletePost(post).then(posts=> (dispatch(getAllPosts(posts)))))
}
   

export const createComment = (comment)=>()=>{
    return ( APIUtil.createComment(comment))
}

export const createLike = (like) => (dispatch) => {
    return (APIUtil.createLike(like).then(posts => (dispatch(getAllPosts(posts)))))
}

export const deleteLike = (likeObj)=>(dispatch) => {
    return (APIUtil.deleteLike(likeObj).then(posts => (dispatch(getAllPosts(posts)))))
}
