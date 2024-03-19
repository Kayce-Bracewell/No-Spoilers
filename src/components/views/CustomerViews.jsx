import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { NewPost } from "../posts/NewPost"
import { NavBar } from "../nav/NavBar"
import { AllPostsDisplay } from "../posts/AllPostsDisplay"
import { PostDetails } from "../posts/PostDetails"
import { MyPosts } from "../posts/MyPosts"
import { LikedPosts } from "../posts/LikedPosts"
import { NewBook } from "../books/NewBook"


export const CustomerViews = ({ currentUser }) => {

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <NavBar />
                    <Outlet />
                </>
            }>
                <Route index element={<><Home /><AllPostsDisplay /></>}/>
                <Route path="newpost" element={<NewPost currentUser={currentUser}/>}/>
                <Route path="post">
                    <Route path=":postId" element={<PostDetails currentUser={currentUser}/>}/>
                </Route>
                <Route path="myposts" element={<MyPosts currentUser={currentUser}/>}/>
                <Route path="likes" element={<LikedPosts currentUser={currentUser}/>}/>
                <Route path="book" element={<NewBook />}/>
            </Route>
        </Routes>
    )
}