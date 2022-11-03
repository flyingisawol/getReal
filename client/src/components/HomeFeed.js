import { Routes, Route, Link } from 'react-router-dom'
import Profile from './Profile'



const HomeFeed = ({ profiles, user }) => {

    return (
      <div className="home-page">
        <h2>getREAL</h2>
        {user && <Link to='/getreal/showall'>Show all users</Link>}
        {profiles.map((profile) => <Profile profile={profile} />)}
      </div>
    )
  }

  export default HomeFeed