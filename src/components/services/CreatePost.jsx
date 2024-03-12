

export const CreatePost = async (postTitle, postBody, BookId, userId) => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: postTitle,
            body: postBody,
            likes: 0,
            bookId: parseInt(BookId),
            userId: userId
        })
    }

    const response = await fetch("http://localhost:8088/posts", postOptions)
}