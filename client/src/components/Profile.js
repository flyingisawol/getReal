import { Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"

const Profile = ({ profile }) => {
  return (
    <Card className="card">
      <Card.Body>
      <Link to={`/getreal/${profile._id}`}>
        <Card.Img src={profile.profileImg} alt={profile.name} />
      </Link>
      <div className="text-block">
      <Card.Title>{profile.name}</Card.Title>
      <Card.Text>Age: {profile.age}</Card.Text>
      <Card.Title>{profile.location}</Card.Title>
    </div>
    </Card.Body>
    </Card>
  )
}

export default Profile
