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

export const createPost = (post) => {
    console.log(post)
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