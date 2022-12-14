import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

const initialState = { username: "", password: "" }

const Login = ({ setUser }) => {
  const [fields, setFields] = useState(initialState)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFields({
      ...fields,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    })
    const data = await res.json()
    if (res.status === 401) {
      setError(data)
    } else if (res.status === 200) {
      setError(null)
      setUser(data)
      navigate("/getreal")
    }
    setFields(initialState)
  }

  return (
    <div className="login-page">
      <div className="login-form">
        <h4>Sign In</h4>
        <p>Not Registered?
      <Link to="/register" style={{ textDecoration: 'none' }}> Sign Up</Link></p>
      <form onSubmit={handleSubmit}>
      {error && <p>{error.msg}</p>}
      <input
        onChange={handleChange}
        value={fields.username}
        name="username"
        id="login-username"
        type="text"
        placeholder="username"
      />

      <input
        onChange={handleChange}
        value={fields.password}
        name="password"
        id="login-password"
        type="Password"
        placeholder="password"
      />
      <div className="login-button">
      <input type="submit" value="SIGN IN" />
      </div>
      <div className="register-button">
      </div>
    </form>
    </div>
    </div>
  )
}

export default Login
