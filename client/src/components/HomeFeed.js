import { Routes, Route, Link } from 'react-router-dom'
import Profile from './Profile'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

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
      <div className="content-body">
          {user && <Link to='/getreal/showall'>Show all users</Link>}
          {profiles.length > 0 && profiles.map((profile) => <Profile profile={profile} key={user.id} />)}
          {/* <h2>loading...</h2> */}
          
          {user && <Link to='/getreal/showall'><Button id="showAllBtn">Find more</Button></Link>}
      </div>
    )
  }

  export default HomeFeed