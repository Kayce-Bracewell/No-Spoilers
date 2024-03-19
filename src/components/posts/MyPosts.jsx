import { useEffect, useState } from "react"
import { GetUserPosts } from "../services/GetPosts"
import { AllPostsDisplay } from "./AllPostsDisplay"


export const MyPosts = ({ currentUser }) => {
    const [MyPosts, setMyPosts] = useState([])

    useEffect(() => {
        if (currentUser?.id) {
            GetUserPosts(currentUser.id).then((posts) => {
                setMyPosts(posts)
            })
        }
    }, [currentUser])

    return (
        <>
            <h2>My Posts</h2>
            <AllPostsDisplay MyPosts={MyPosts}/>    
        </>
    )
}