import { Routes, Route, Link } from 'react-router-dom'

const HomeFeed = () => {
    return (
      <div className="home-page">
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