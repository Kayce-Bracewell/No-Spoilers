import { useEffect, useState } from "react"
import { GetPosts } from "../services/GetPosts"
import "./AllPostsDisplay.css"
import { Link } from "react-router-dom"


export const AllPostsDisplay = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
            GetPosts().then((post) => {
                setPosts(post)
            })
    }, [])

    return (
        <div className="posts-container">
            {posts.map((post) => {
                return (
                    <Link to='/details' key={post.id} className="post-link">
                        <div className="post">
                            <h4 className="post-title">"{post.title}"</h4>
                            <div className="post-img"><img src={post.book.bookImg}/></div>
                            <div className="post-author">Posted by user: {post.user.fullName}</div>
                        </div>
                    </Link>
                )
            })} 
            
            
        </div>
    )
}