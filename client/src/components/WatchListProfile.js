


const WatchListProfile = ({profile, loggedInProfile, removeFromWatchlist}) => {



    const handleRemoveWatchlist = (event) => {
        const removeWatchlist = async () => {
            const res = await fetch('/api/getreal/removewatchlist', {
                method: 'PUT',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({id: profile._id})
            })
            const data = await res.json()
            removeFromWatchlist(data)
        }
        removeWatchlist()
    }

    return (
        <>
            {loggedInProfile.watchList.includes(profile._id) && 
            <> 
                <p>{profile.name}</p> 
                <button value={profile._id} onClick={handleRemoveWatchlist}>remove from watchlist</button>
                <img src={profile.profileImg} alt={profile.name} />
            </>
            }       
        </>
    )
}

export default WatchListProfile



