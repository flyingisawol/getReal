import { Routes, Route, Link } from 'react-router-dom'
import Profile from './Profile'



const HomeFeed = ({profiles}) => {

    return (
      <div className="home-page">

        <h1>getREAL</h1>
        <h2>Homepage</h2>

        {profiles.map((profile) => <Profile profile={profile} />)}

      </div>
    )
  }

  export default HomeFeed