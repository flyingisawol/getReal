import { Routes, Route, Link } from 'react-router-dom'
import Profile from './Profile'
import { useEffect, useState } from 'react'

const HomeFeed = ({ user }) => {
  const [profiles, setProfiles] = useState([])

  //RETRIEVE USER PROFILES
  useEffect(() => {
    const getProfiles = async () => {
      const res = await fetch("/api/getreal")
      const data = await res.json()
      setProfiles(data)
    }
    getProfiles()
  }, [])

    return (
      <div className="home-page">
          {user && <Link to='/getreal/showall'>Show all users</Link>}
          {profiles.length > 0 && profiles.map((profile) => <Profile profile={profile} key={user.id} />)}
          {/* <h2>loading...</h2> */}
      </div>
    )
  }

  export default HomeFeed