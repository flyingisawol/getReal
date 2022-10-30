import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'


import HomeFeed from './components/HomeFeed'
import WatchList from './components/WatchList'
import Search from './components/Search'
import UserProfile from './components/UserProfile'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import CreateProfile from './components/CreateProfile'
import SearchResults from './components/SearchResults'



function App() {
  const [query, setQuery] = useState(null)
  return (
    <div className="App">
      <Link to='/api/getreal'>go home</Link>
      <Routes>
        <Route path='/api/getreal/createprofile' element={<CreateProfile/>} />
        <Route path='/api/getreal' element={<HomeFeed />} />
        <Route path='/api/getreal/profile' element={<Profile />} />
        <Route path='/api/getreal/watchlist' element={<WatchList />} />
        <Route path='/api/getreal/search' element={<Search query={query} setQuery={setQuery} />} />
        <Route path='/api/getreal/searchresults' element={<SearchResults />} />
        <Route path='/api/getreal/user-profile' element={<UserProfile />} />
        <Route path='/api/getreal/login' element={<Login />} />
        <Route path='/api/getreal/register' element={<Register />} />
      </Routes> 
    </div>
  );
}

export default App;
