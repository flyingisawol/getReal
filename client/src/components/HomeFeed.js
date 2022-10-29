import { Routes, Route, Link } from 'react-router-dom'

const HomeFeed = () => {
    return (
      <div className="home-page">
        <h1>Homepage</h1>
          <nav>
            <Link to='/getreal/profile' >Profile</Link>
            <br/>
            <Link to='/getreal/watchlist' >Watchlist</Link>
            <br/>
            <Link to='/getreal/search' >Search</Link>
            <br/>
            <Link to='/getreal/user-profile' >User profile</Link>
            <br/>
            <Link to='/getreal/login' >Login</Link>
            <br/>
            <Link to='/getreal/createprofile' >Create profile</Link>
          </nav>
      </div>
    )
  }

  export default HomeFeed