export const GetNonExpandedPost = (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`).then((res) => res.json())
}

export const GetPostById = (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}?_expand=user&_expand=book`).then(res => res.json())
}