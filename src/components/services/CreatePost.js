export const EditPost = (postObj, postTitle, postBody, bookId) => {
    const postOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: postTitle,
            body: postBody,
            likes: postObj.likes,
            bookId: parseInt(bookId),
            userId: postObj.user.id,
        })
    }

    const response = fetch(`http://localhost:8088/posts/${postObj.id}`, postOptions)
}

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