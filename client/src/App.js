import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const HomeFeed = () => {
  return (
    <div className="home-page">
      <h1>Homepage</h1>
        <nav>
          <Link to='/getreal/profile' >Profile</Link>
          <br/>
          <Link to='/getreal/watchlist' >Watchlist</Link>
        </nav>
    </div>
  )
}


const WatchList = () => {
  return <h1>Watchlist</h1>
}


const Profile = () => {
  return <h1>Profile</h1>
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/getreal' element={<HomeFeed />} />
        <Route path='/getreal/profile' element={<Profile />} />
        <Route path='/getreal/watchlist' element={<WatchList />} />
      </Routes> 
    </div>
  );
}

export default App;
