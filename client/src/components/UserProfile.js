import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const UserProfile = () => {
  const [profile, setProfile] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const getProfile = async () => {
      const res = await fetch(`/api/getreal/${id}`)
      const data = await res.json()
      setProfile(data)
    }
    getProfile()
  }, [])

  const handleMatch = async () => {
    const res = await fetch("/match", {
      method: "PUT",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    })
    const data = await res.json()
    console.log("DATA FROM MATCHES ROUTER", data)
  }
  return (
    <div>
      <h1>show page</h1>
      {!profile ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>{profile.name}</h1>
          <button onClick={handleMatch}>Match</button>
          <img src={profile.profileImg} alt={profile.name} />
        </>
      )}
    </div>
  )
}

export default UserProfile
