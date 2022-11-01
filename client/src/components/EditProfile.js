import {useEffect} from 'react'

const EditProfile = ({user}) => {
    
    useEffect(() => {
        const grabProfileId = async () => {
          const res = await fetch(`/data/${user.id}`)
          const profileLoggedIn = await res.json()
          console.log(profileLoggedIn)
        }
        if (user) {
          grabProfileId()
        }
      }, [user])

    return <h1>edit profile  </h1>
}

export default EditProfile

