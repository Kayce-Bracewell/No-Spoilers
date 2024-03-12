import { useEffect, useState } from "react"
import { GetBooks } from "../services/BookService"
import { CreatePost } from "../services/CreatePost"
import "./NewPost.css"
import { useNavigate } from "react-router-dom"

export const NewPost = ({ currentUser }) => {
    const [books, setBooks] = useState([])
    const [postTitle, setPostTitle] = useState("")
    const [postBody, setPostBody] = useState("")
    const [postBook, setPostBook] = useState("")

    const Navigate = useNavigate()

    useEffect(() => {
        GetBooks().then((bookArray) => {
            setBooks(bookArray)
        })
    }, [])

    return (
        <form className="post-form">
            <fieldset>
                <legend>New Post</legend>
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
                <textarea type="text" id="body" name="body" onChange={(event) => {
                    setPostBody(event.target.value)
                    Navigate("/")
                }}/><br />
                <button onClick={() => {
                    CreatePost(postTitle, postBody, postBook, currentUser.id)
                }}type="button">Create Post</button>
            </fieldset>
        </form>
    )
}