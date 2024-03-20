import { useEffect, useState } from "react"
import { GetBooks } from "../services/BookService"
import { CreatePost, EditPost } from "../services/CreatePost"
import "./NewPost.css"
import { useNavigate } from "react-router-dom"

export const NewPost = ({ currentUser, post }) => {
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

    useEffect(() => {
        if (typeof post != "undefined") {
            setPostTitle(post.title)
            setPostBody(post.body)
            setPostBook(JSON.stringify(post.bookId))
        }
    }, [])

    return (
        <form className="post-form">
            <fieldset>
                <legend>New Post</legend>
                <label>Enter Post Title:</label><br />
                <input type="text" id="title" name="title" value={postTitle} onChange={(event) => {
                    setPostTitle(event.target.value)
                }}/><br />
                <label>Select Book:</label><br />
                <select selected={post?.bookId} onChange={(e) => {
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
                <textarea type="text" id="body" name="body" value={postBody} onChange={(event) => {
                    setPostBody(event.target.value)
                }}/><br />
                {typeof post == "undefined" ? <button id="post-btn" className="btn" onClick={() => {
                    CreatePost(postTitle, postBody, postBook, currentUser.id)
                    Navigate("/")
                }}type="button">Create Post</button> : <button type="button" id="post-btn" onClick={() => {
                    EditPost(post, postTitle, postBody, postBook)
                    Navigate(`/`)
                }}>Save Edit</button>}
            </fieldset>
        </form>
    )
}