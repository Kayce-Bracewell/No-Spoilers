import { useEffect, useState } from "react"
import { GetLikedPosts } from "../services/LikeService"
import { Link } from "react-router-dom"


export const LikedPosts = ({ currentUser }) => {
    const [AllLikes, setAllLikes] = useState([])
    const [LikedPosts, setLikedPosts] = useState([])

    useEffect(() => {
        GetLikedPosts().then((posts) => {setAllLikes(posts)})
    }, [])

    useEffect(() => {
        const filteredLikes = AllLikes.filter((posts) => currentUser.id === posts.userId)
        setLikedPosts(filteredLikes)
    }, [AllLikes])

    return (
        <>
            <h2>Favorites</h2>
            <div className="posts-container">
                {LikedPosts.map((postObj) => {
                    return (
                        <Link to={`/post/${postObj.post.id}`} key={postObj.id} className="post-link">
                        <div className="post">
                            <h4 className="post-title">{postObj.post.title}</h4>
                            <div className="post-img"><img src={postObj.book.bookImg}/></div>
                        </div>
                        </Link>
                    )
                })}
            </div>
        </>
        
    )
}