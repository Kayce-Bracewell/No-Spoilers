import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetNonExpandedPost, GetPostById } from "../services/GetPostById"
import "./PostDetails.css"
import { handleDelete } from "../services/DeletePost"
import { LikePost } from "../services/LikePost"
import { NewPost } from "./NewPost"


export const PostDetails = ({currentUser}) => {
    const [post, setPost] = useState([])
    const [PurePost, setPurePost] = useState([])
    const [StateCount, setStateCount] = useState(0)

    const { postId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        GetPostById(postId).then((post) => {setPost(post)})
    }, [])

    useEffect(() => {
        GetNonExpandedPost(postId).then((post) => {setPurePost(post)})
    }, [])

    return (
        <div className="posts-container">
            <div className="post" id="post-details">
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
                    </> : 
                    <>
                        <button onClick={() => {
                            LikePost(PurePost)
                            navigate("/")
                        }} className="btn" id="edit-btn">Like!</button>
                    </>}
                </div>
                {StateCount > 0 ? <NewPost post={post}/> : <></>}
            </div>
        </div>
    )
}