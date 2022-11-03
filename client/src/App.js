import { useState, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"

import HomeFeed from "./components/HomeFeed"
import WatchList from "./components/WatchList"
import Search from "./components/Search"
import UserProfile from "./components/UserProfile"
import Profile from "./components/Profile"
import Login from "./components/Login"
import Register from "./components/Register"
import CreateProfile from "./components/CreateProfile"
import SearchResults from "./components/SearchResults"
import ShowAll from './components/ShowAll'
import Questionnaire from "./components/Questionnaire"
import Header from "./components/Header"
import EditProfile from "./components/EditProfile"

function App() {
  const [user, setUser] = useState(null)
  const [query, setQuery] = useState(null)
  //const [loggedInID, setLoggedInID] = useState(null)
  const [profiles, setProfiles] = useState([])

  //grabs all profiles
  useEffect(() => {
    const getProfiles = async () => {
      const res = await fetch("/api/getreal")
      const data = await res.json()
      setProfiles(data)
    }
    getProfiles()
  }, [])

  useEffect(() => {
    const getLoggedInUser = async () => {
      const res = await fetch("/api/loggedin-user")
      const data = await res.json()
      if (res.status === 200) {
        setUser(data)
      }
    }
    getLoggedInUser()
  }, [])
  
  return !user ?  <Login setUser={setUser} /> : (
    <div className="App">
      <Link to="/getreal">go home</Link>
      <Header user={user} setUser={setUser} profiles={profiles} />
      <Routes>
        <Route path="/getreal/createprofile" element={<CreateProfile />} />
        <Route path="/getreal/questionnaire" element={<Questionnaire />} />
        <Route path="/getreal" element={<HomeFeed profiles={profiles} />} />
        <Route path="/getreal/profile" element={<Profile />} />
        <Route
          path="/getreal/edit"
          element={<EditProfile user={user} />}
        />
        <Route path="/getreal/watchlist" element={<WatchList profiles={profiles} />} />
        <Route
          path="/getreal/search"
          element={<Search query={query} setQuery={setQuery} />}
        />
        <Route path="/getreal/searchresults" element={<SearchResults />} />
        <Route path="/getreal/:id" element={<UserProfile />} />
        <Route path="/getreal/user-profile" element={<UserProfile />} />
        <Route
          path="/getreal/login"
          element={<Login setUser={setUser} />}
        />
        <Route path="/getreal/register" element={<Register />} />
        <Route path="/getreal/showall" element={<ShowAll />} />
      </Routes>
    </div>
    )
}

export default App
