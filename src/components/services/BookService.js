export const CreateBook = async (title, genre, date, img, author) => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            genre: genre,
            date: date,
            bookImg: img,
            authorName: author
        })
    }

    const response = await fetch("http://localhost:8088/books", postOptions)
}

export const GetBooks = () => {
    return fetch("http://localhost:8088/books").then(res => res.json())
}