export const LikePost = (postObj) => {
    const postOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: postObj.title,
            body: postObj.body,
            likes: postObj.likes + 1,
            bookId: postObj.bookId,
            userId: postObj.userId
        })
    }

    const response = fetch(`http://localhost:8088/posts/${postObj.id}`, postOptions)
}