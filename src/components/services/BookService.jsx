

export const GetBooks = () => {
    return fetch("http://localhost:8088/books").then(res => res.json())
}