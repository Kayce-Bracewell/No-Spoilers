

export const GetPosts = () => {
    return fetch("http://localhost:8088/posts?_expand=user&_expand=book").then(res => res.json())
}