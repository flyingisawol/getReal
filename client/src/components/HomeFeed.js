import { Routes, Route, Link } from 'react-router-dom'
import Profile from './Profile'



const HomeFeed = ({profiles}) => {

    return (
      <div className="home-page">

        <h1>getREAL</h1>
        <h2>Homepage</h2>

        {profiles.map((profile) => <Profile profile={profile} />)}

        <h1>getREAL</h1>
          <nav>
            <Link to='/api/getreal/login'>Login</Link>
            <Link to='/api/getreal/profile'>Profile</Link>
            <Link to='/api/getreal/search'>Search</Link>
            <Link to='/api/getreal/watchlist'>Watchlist</Link>
          </nav>
      </div>
    )
  }

  export default HomeFeed