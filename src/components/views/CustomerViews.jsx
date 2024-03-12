import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { NewPost } from "../posts/NewPost"
import { NavBar } from "../nav/NavBar"
import { AllPostsDisplay } from "../posts/AllPostsDisplay"


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
            </Route>
        </Routes>
    )
}