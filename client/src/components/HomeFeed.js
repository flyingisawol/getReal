import { Routes, Route, Link } from 'react-router-dom'
import Profile from './Profile'

const HomeFeed = ({ profiles, user }) => {
  console.log("profiles = ", profiles, "user = ", user)

    return (
      <div className="home-page">
        <h2>getREAL</h2>
          {user && <Link to='/getreal/showall'>Show all users</Link>}
          {profiles.length > 0 && profiles.map((profile) => <Profile profile={profile} />)}
          {/* <h2>loading...</h2> */}
      </div>
    )
  }

  export default HomeFeed