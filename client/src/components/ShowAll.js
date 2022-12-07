import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

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
      <div className="content-body">
        {p &&
          p.map((profile) => (
            <Card className="card">
              <Card.Body>
                  <div className="posts">
                    <Link to={`/getreal/${profile._id}`}>
                      <img src={profile.profileImg} alt={profile.name} />
                    </Link>
                    <div className="text-block">
                      <h1>{profile.name}</h1>

                      <p>Age: {profile.age}</p>
                      <p>Location: {profile.location}</p>
                    </div>
                  </div>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  )
}

export default ShowAll
