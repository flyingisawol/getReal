import { useNavigate } from "react-router-dom"

const LogoutButton = ({ setUser }) => {
  const navigate = useNavigate()
    const handleClick = async () => {
      const res = await fetch('/api/logout', {
        method: 'POST'
      })
      const data = await res.json()
      console.log(data)
      setUser(null)
      navigate("/login")
    }
  
    return (
      <button onClick={handleClick}>Logout</button>
    )
  }
  
  export default LogoutButton