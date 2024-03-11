import { useEffect, useState } from "react"
import { GetBooks } from "../services/BookService"
import { CreatePost } from "../services/CreatePost"

export const NewPost = () => {
    const [books, setBooks] = useState([])
    const [postTitle, setPostTitle] = useState("")
    const [postBody, setPostBody] = useState("")
    const [postBook, setPostBook] = useState("")

    useEffect(() => {
        GetBooks().then((bookArray) => {
            setBooks(bookArray)
        })
    }, [])

    return (
        <form>
            <fieldset>
                <legend>New Post:</legend>
                <label>Enter Post Title:</label><br />
                <input type="text" id="title" name="title" onChange={(event) => {
                    setPostTitle(event.target.value)
                }}/><br />
                <label>Select Book:</label><br />
                <select onChange={(e) => {
                    const index = e.target.selectedIndex;
                    const el = e.target.childNodes[index]
                    const option =  el.getAttribute('id');
                    setPostBook(option)
                }}>
                    <option data-id="0">--Select A Book--</option>
                    {books.map((book) => {
                        return (
                            <option id={book.id} key={book.id}>{book.title}</option>
                        )
                    })}
                </select><br />
                <label>Enter Post Body:</label><br />
                <input type="text" id="body" name="body" onChange={(event) => {
                    setPostBody(event.target.value)
                }}/><br />
                <button onClick={() => {
                    CreatePost(postTitle, postBody, postBook)
                }}type="button">Create Post</button>
            </fieldset>
        </form>
    )
}