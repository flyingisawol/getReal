import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = { username: '', password: '' }

const Login = ({ setUser }) => {
  const [fields, setFields] = useState(initialState)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFields({
      ...fields,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fields)
    })
    const data = await res.json()
    if (res.status === 401) {
      setError(data)
    } else if (res.status === 200) {
      setError(null)
      setUser(data)
      navigate(-1)
    }

    setFields(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      { error && <p>{error.msg}</p> }
      <label htmlFor="login-username">Username</label>
      <input
        onChange={handleChange}
        value={fields.username}
        name="username"
        id="login-username"
        type="text" />

      <label htmlFor="login-password">Password</label>
      <input
        onChange={handleChange}
        value={fields.password}
        name="password"
        id="login-password"
        type="Password" />
      <input type="submit" value="Login" />
    </form>
  )
}

export default Login