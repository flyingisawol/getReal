


const WatchListProfile = ({profile, loggedInProfile, removeFromWatchlist}) => {

    console.log(profile, loggedInProfile)


    const handleRemoveWatchlist = (event) => {
        const removeWatchlist = async () => {
            const res = await fetch('/api/getreal/removewatchlist', {
                method: 'PUT',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({id: profile._id})
            })
            const data = await res.json()
            console.log(data)
            removeFromWatchlist(data)
        }
        removeWatchlist()
    }

    return (
        <>
            <> 
                <p>{profile.name}</p> 
                <button value={profile._id} onClick={handleRemoveWatchlist}>remove from watchlist</button>
                <img src={profile.profileImg} alt={profile.name} />
            </>
        </>
    )
}

export default WatchListProfile



