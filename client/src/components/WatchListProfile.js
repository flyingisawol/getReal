import { Button } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'

const WatchListProfile = ({
  profile,
  loggedInProfile,
  removeFromWatchlist,
}) => {
  console.log(profile, loggedInProfile)

const WatchListProfile = ({
  profile,
  loggedInProfile,
  removeFromWatchlist,
}) => {
  console.log(profile, loggedInProfile)

  const handleRemoveWatchlist = (event) => {
    const removeWatchlist = async () => {
      const res = await fetch("/api/getreal/removewatchlist", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: profile._id }),
      })
      const data = await res.json()
      removeFromWatchlist(data)
    }
    removeWatchlist()
  }

  return (
    <>
    <div className='content-body'>
      <p>{profile.name}</p>
      <img src={profile.profileImg} alt={profile.name} />
      <Button value={profile._id} variant="danger" onClick={handleRemoveWatchlist}>
        remove from watchlist
      </Button>
      <button value={profile._id} onClick={handleRemoveWatchlist}>
        remove from watchlist
      </button>
      <img src={profile.profileImg} alt={profile.name} />
    </div>
    </>
  )
}
}
export default WatchListProfile
