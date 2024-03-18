export const GetUserPosts = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}/posts?_expand=book`).then(res => res.json())
}

export const GetPosts = () => {
    return fetch("http://localhost:8088/posts?_expand=user&_expand=book").then(res => res.json())
}