import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import HomeFeed from './components/HomeFeed'
import WatchList from './components/WatchList'
import Search from './components/Search'
import UserProfile from './components/UserProfile'
import Profile from './components/Profile'



function App() {
  return (
    <div className="App">
      <Link to='/getreal'>go home</Link>
      <Routes>
        <Route path='/getreal' element={<HomeFeed />} />
        <Route path='/getreal/profile' element={<Profile />} />
        <Route path='/getreal/watchlist' element={<WatchList />} />
        <Route path='/getreal/search' element={<Search />} />
        <Route path='/getreal/user-profile' element={<UserProfile />} />
      </Routes> 
    </div>
  );
}

export default App;
