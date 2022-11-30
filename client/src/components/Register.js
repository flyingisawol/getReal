import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Register = ({ setUser }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      username: username,
      password: password,
    }

    try {
      const res = await fetch("/api/getreal/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const userData = await res.json()
      setUser(userData)
      navigate("/getreal/createprofile")
    } catch (error) {}
  }

  return (
    <>
      <div className="login-page">
        <div className="login-form">
          <h4>Register</h4>
          <p>
            Already Registered?
            <Link to="/login" style={{ textDecoration: "none" }}>
              {" "}
              Sign In
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              name="username"
              placeholder="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />

            <input
              name="password"
              placeholder="password"
              type="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="login-button">
              <input type="submit" value="Register" />
            </div>
          </form>
          <div className="register-button">
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
