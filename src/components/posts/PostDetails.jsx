import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetPostById } from "../services/GetPostById"
import "./PostDetails.css"
import { handleDelete } from "../services/DeletePost"
import { NewPost } from "./NewPost"
import { DeleteLikeById, GetPureLikes, LikePost } from "../services/LikeService"


export const PostDetails = ({currentUser}) => {
    const [post, setPost] = useState([])
    const [Likes, setLikes] = useState([])
    const [StateCount, setStateCount] = useState(0)
    const [HasBeenLiked, setHasBeenLiked] = useState(false)
    const [FoundLike, setFoundLike] = useState([])

    const { postId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        GetPostById(postId).then((post) => {setPost(post)})
    }, [])

    useEffect(() => {
        GetPureLikes().then((likes) => {setLikes(likes)})
    }, [])

    useEffect(() => {
        const foundLike = Likes.find((like) => currentUser.id == like.userId && post.id == like.postId)
        setFoundLike(foundLike)
        if (foundLike) {
            setHasBeenLiked(true)
        }
    }, [Likes])

    return (
        <div className="posts-container">
            <div className="post" id="post-details">
            {StateCount > 0 ? <NewPost post={post}/> :
            <>
                <h4 className="post-title">{post.title}</h4>
                <div className="post-img"><img src={post.book?.bookImg}/></div>
                <div className="post-title">{post.body}</div>
                <div className="options-container">
                    {post.userId == currentUser.id ?
                    <>
                        <button onClick={() => {
                            handleDelete(post.id)
                            navigate("/")
                        }} id="del-btn" className="btn">Delete</button>
                        <button onClick={() => {
                            setStateCount(1)
                        }} id="edit-btn" className="btn">Edit</button>
                    </> : <></>}
                    {post.userId != currentUser.id && HasBeenLiked == false ? 
                    <>
                        <button onClick={() => {
                            LikePost(currentUser.id, post.id, post.book.id)
                            navigate("/likes")
                        }} className="btn" id="edit-btn">Like!</button>
                    </> : <></>}
                    {post.userId != currentUser.id && HasBeenLiked ?
                    <>
                        <button type="button" id="post-btn" className="btn" onClick={() => {
                            DeleteLikeById(FoundLike.id)
                            navigate("/likes")
                        }}>Unlike</button>
                    </> : <></>}
                </div>
            </>}
            </div>
        </div>
    )
}