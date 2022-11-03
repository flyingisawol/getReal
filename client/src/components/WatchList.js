import {useState, useEffect} from 'react'
import WatchListProfile from './WatchListProfile'

const WatchList = () => {
  const [loggedInProfile, setLoggedInProfile] = useState(null)

  useEffect(() => {
      const getProfile = async () => {
          const res = await fetch('/api/getreal/watchlist')
          const data = await res.json()
          setLoggedInProfile(data)
      }
      getProfile()
  }, [])

  const removeFromWatchlist = (updateRemove) => {
  }
 
    return (
      <>
      <h1>Watchlist</h1>
      {loggedInProfile ?
        loggedInProfile.watchList.map((profile) => <WatchListProfile profile={profile} loggedInProfile={loggedInProfile} removeFromWatchlist={removeFromWatchlist} /> )
        : 
        null
      }
      </>
    )
  }

  export default WatchList