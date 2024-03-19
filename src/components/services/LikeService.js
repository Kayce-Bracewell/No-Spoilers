export const GetLikedPosts = () => {
    return fetch(`http://localhost:8088/likes?_expand=post&_expand=user&_expand=book`).then(res => res.json())
}

export const LikePost = async (userId, postId, bookId) => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: userId,
            postId: postId,
            bookId: bookId
        })
    }

    const response = await fetch("http://localhost:8088/likes", postOptions)
}