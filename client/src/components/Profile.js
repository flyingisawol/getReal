import { Routes, Route, Link } from 'react-router-dom'
import {useState, useEffect} from 'react'


const Profile = ({profile}) => {

  useEffect(() => {
    const getProfiles = async () => {
      const res = await fetch('/api/getreal')
      const data  = res.json()
      console.log(data)
    }
    getProfiles()
  }, [])


    return (
      <div className='posts'>
        <Link to={`/api/getreal/${profile._id}`}>
          <h3>{profile.name}</h3>
          <img src={profile.profileImg} alt={profile.name} />
        </Link>
        <p>Age: {profile.age}</p>
        <p>Location: {profile.location}</p>

      </div>
    )
    
  }

export default Profile