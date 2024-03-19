import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link className="navbar-link" to="/">Home</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/newpost">New Post</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/myposts">My Posts</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/likes">Liked Posts</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/book">New Book</Link>
            </li>
            {localStorage.getItem("honey_user") ? (
                <li className="navbar-item navbar-logout">
                    <Link className="navbar-link" to="" onClick={() => {
                        localStorage.removeItem("honey_user")
                        navigate("/", { replace: true})
                    }}>Logout</Link>
                </li>
            ) : (
                ""
            )}
        </ul>
    )
}