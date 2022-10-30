import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'


const UserProfile = () => {
  const [profile, setProfile] = useState(null)

  const {id} = useParams()


  useEffect(() => {
    const getProfile = async () => {
      const res = await fetch(`/api/getreal/${id}`)
      const data = await res.json()
      console.log(data)
      setProfile(data)
    }
    getProfile()
  }, [])

    return (
      <div>
        <h1>show page</h1>
        {!profile ? 
          <h1>Loading</h1> : 
          <>
            <h1>{profile.name}</h1>
            <img src={profile.profileImg} alt={profile.name}/>
          </>
          }
      </div>
    )
  }


export default UserProfile