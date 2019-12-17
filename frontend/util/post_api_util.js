// export const createPost = (post)=> (
//     $.ajax({
//         method: "POST",
//         url: "/api/posts",
//         data: {post}
//     })

// )


export const fetchAllPosts = () => (
    $.ajax({
        method: "GET",
        url: "/api/posts"
    })

)

export const fetchSomePosts = (user_id)=>{

    return(
    $.ajax({
        method: "GET",
        url:`/api/post/`,
        data:{user_id}
    })
    )}

export const createPost = (post) => {
    return(
    $.ajax({
        method: "POST",
        url:"/api/posts",
        data: {post},
        contentType: false,
        processData: false
    })
    )}

export const deletePost =(post) =>{
    return(
        $.ajax({
            method:"DELETE",
            url:`/api/posts/${post.id}`
        })
    )
}

export const createComment =( comment) =>{
    return (
        
        $.ajax({
            method:"POST",
            url: " /api/comments",
            data: {comment}
        })
    )
}


export const createLike = (likeObj) => {
    return (
        $.ajax({
            method: "POST",
            url: "/api/likes",
            data: { likeObj },
        })
    )
}


export const deleteLike = (likeObj) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `/api/likes/1`,
            data: { likeObj}
        })
    )
}


export const createFollow = (follow) => {

    return (
        $.ajax({
            method:"POST",
            url: "/api/follows",
            data: {follow}
        })

    )
}


export const deleteFollow = follow => {
  return $.ajax({
    method: "DELETE",
    url: `/api/follows/1`,
    data: { follow }
  });
};