
import * as APIUtil from '../util/post_api_util';


export const GET_ALL_POSTS = "GET_ALL_POSTS"


const getAllPosts = (posts)=>({
    type: GET_ALL_POSTS,
    posts
})


export const fetchPosts = ( )=>(dispatch)=>(
    APIUtil.fetchAllPosts().then(posts=>(dispatch(getAllPosts(posts))))

)

export const newPost = (post) => (dispatch)=>(
    APIUtil.createPost(post).then(posts=> (dispatch(getAllPosts(posts)
    ))))
