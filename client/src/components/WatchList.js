import WatchListProfile from './WatchListProfile'
import {useState, useEffect} from 'react'



const WatchList = ({profiles}) => {

  const [loggedInProfile, setLoggedInProfile] = useState(null)

  useEffect(() => {
    console.log('use effect was called')
      const getProfile = async () => {
          const res = await fetch('/api/getreal/watchlist')
          const data = await res.json()
          setLoggedInProfile(data)
      }
      getProfile()
  }, [])

  const removeFromWatchlist = (updateRemove) => {
    console.log('remove form watch list called')
    setLoggedInProfile(updateRemove)
  }
 

    return (
      <>
      <h1>Watchlist</h1>


      {loggedInProfile ?
        profiles.map((profile) => <WatchListProfile profile={profile} loggedInProfile={loggedInProfile} removeFromWatchlist={removeFromWatchlist} /> )
        : 
        null
      }
      </>
    )
  }

  export default WatchList