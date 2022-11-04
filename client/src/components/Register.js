import { useNavigate } from "react-router-dom";
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
    };

    try {
      const res = await fetch("/api/getreal/register",
        {
          method: "post",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(data)
        }
        ) 
        const userData = await res.json()
        setUser(userData)
        navigate("/getreal/createprofile")
    } catch (error) {
    }
  };

  return (
    <>
      <div className='content-body'>
      <h1>Register</h1>
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
        <input type="submit" value="Register" />
      </form>
      </div>
    </>
  )
}

export default Register;