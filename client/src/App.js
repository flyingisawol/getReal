import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const HomeFeed = () => {
  return <h1>Homepage</h1>
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
      </Routes> 
    </div>
  );
}

export default App;
