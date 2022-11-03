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
import Questionnaire from "./components/Questionnaire"

import Header from "./components/Header"
import EditProfile from "./components/EditProfile"

function App() {
  const [user, setUser] = useState(null)
  const [query, setQuery] = useState(null)
  const [loggedInID, setLoggedInID] = useState(null)
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
      const res = await fetch("/loggedin-user")
      const data = await res.json()
      if (res.status === 200) {
        setUser(data)
      }
    }
    getLoggedInUser()
  }, [])

  // useEffect(() => {
  //   const getLoggedInID = async () => {
  //     const res = await fetch('/logggedin-user')
  //     const loggedInUser = await res.json()
  //     setLoggedInID(loggedInUser.id)
  //   }
  //   getLoggedInID()
  //   console.log(loggedInID)
  // }, [])

  return (
    <div className="App">
      <Link to="/api/getreal">go home</Link>
      <Header user={user} setUser={setUser} profiles={profiles} />
      <Routes>
        <Route path="/api/getreal/createprofile" element={<CreateProfile />} />
        <Route path="/getreal/questionnaire" element={<Questionnaire />} />
        <Route path="/api/getreal" element={<HomeFeed profiles={profiles} />} />
        <Route path="/api/getreal/profile" element={<Profile />} />
        <Route
          path="/api/getreal/edit"
          element={<EditProfile user={user} />}
        />
        <Route path="/api/getreal/watchlist" element={<WatchList />} />
        <Route
          path="/api/getreal/search"
          element={<Search query={query} setQuery={setQuery} />}
        />
        <Route path="/api/getreal/searchresults" element={<SearchResults />} />
        <Route path="/api/getreal/:id" element={<UserProfile />} />
        <Route path="/api/getreal/user-profile" element={<UserProfile />} />
        <Route
          path="/api/getreal/login"
          element={<Login setUser={setUser} />}
        />
        <Route path="/api/getreal/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
