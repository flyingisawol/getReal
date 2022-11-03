const LogoutButton = ({ setUser }) => {
    const handleClick = async () => {
      const res = await fetch('/api/logout', {
        method: 'POST'
      })
      const data = await res.json()
      console.log(data)
      setUser(null)
    }
  
    return (
      <button onClick={handleClick}>Logout</button>
    )
  }
  
  export default LogoutButton