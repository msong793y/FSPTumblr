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
