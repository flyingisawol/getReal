import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ShowAll = () => {
  const [p, setP] = useState(null)

  useEffect(() => {
    const getAllProfiles = async () => {
      const res = await fetch("/api/getreal/showall")
      const data = await res.json()
      setP(data)
    }
    getAllProfiles()
  }, [])

  return (
    <>
      {p &&
        p.map((profile) => (
          <div className="show-all">
            <Link to={`/getreal/${profile._id}`}>
              <h1>{profile.name}</h1>
              <img src={profile.profileImg} alt={profile.name} />
            </Link>

            <p>Age: {profile.age}</p>
            <p>Location: {profile.location}</p>
          </div>
        ))}
    </>
  )
}

export default ShowAll
