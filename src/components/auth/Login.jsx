import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserByEmail } from "../services/UserService"

export const Login = () => {
  const [email, set] = useState("kayceb98@gmail.com")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "honey_user",
          JSON.stringify({
            id: user.id,
            isStaff: user.isStaff,
          })
        )

        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <main className="container-login">
      <section>
        <form className="form-login" onSubmit={handleLogin}>
          <h1 className="garafont">No Spoilers</h1>
          <h2 id="sign-in">Enter Login</h2>
          <fieldset>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(evt) => set(evt.target.value)}
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button className="login-btn btn-info btn" type="submit">
                Sign in
              </button>
              <section>
                <Link to="/register" id="member-yet">Not a member yet?</Link>
              </section>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  )
}
