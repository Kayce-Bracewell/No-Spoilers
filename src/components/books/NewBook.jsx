import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CreateBook } from "../services/BookService"
import "./NewBook.css"


export const NewBook = () => {
    const [BookTitle, setBookTitle] = useState("")
    const [BookGenre, setBookGenre] = useState("")
    const [BookDate, setBookDate] = useState("")
    const [BookImg, setBookImg] = useState("")
    const [BookAuthor, setBookAuthor] = useState("")

    const navigate = useNavigate()

    return (
        <form className="post-form" id="book-form">
            <fieldset>
                <legend>New Book</legend>
                <label>Enter Title:</label><br />
                <input type="text" id="title" name="title" required onChange={(event) => {
                    setBookTitle(event.target.value)
                }}/><br />
                <div className="form-field">
                    <label>Enter Genre:</label>
                    <input type="text" onChange={(event) => {
                        setBookGenre(event.target.value)
                    }}/>
                    <label id="publish-label">Publish Date:</label>
                    <input type="text" placeholder="yyyy-mm-dd" required onChange={(event) => {
                        setBookDate(event.target.value)
                    }}/>
                </div>
                <label>Cover Image:</label><br />
                <input type="text" required onChange={(event) => {
                    setBookImg(event.target.value)
                }}/><br />
                <label>Book Author:</label><br />
                <input type="text" required onChange={(event) => {
                    setBookAuthor(event.target.value)
                }}/><br />
                <button type="button" onClick={(e) => {
                e.preventDefault()
                CreateBook(BookTitle, BookGenre, BookDate, BookImg, BookAuthor)
                navigate("/newpost")
            }}>Submit</button>
            </fieldset>
        </form>
    )
}