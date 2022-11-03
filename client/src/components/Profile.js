import { Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Profile = ({ profile }) => {
  return (
    <div className="posts">
      <Link to={`/getreal/${profile._id}`}>
        <h3>{profile.name}</h3>
        <img src={profile.profileImg} alt={profile.name} />
      </Link>
      <p>Age: {profile.age}</p>
      <p>Location: {profile.location}</p>
    </div>
  )
}

export default Profile
