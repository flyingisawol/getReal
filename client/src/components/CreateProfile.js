import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const CreateProfile = () => {
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const res = await fetch("/api/getreal/create", {
      method: "POST",
      body: formData,
    })
    //recieves incoming data from create route
    const data = await res.json()
    // setPosts([ data, ...posts ])
    // navigate('/getreal/personality')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" required placeholder="full-name" />
      <br />
      <label htmlFor="profileImg">Upload profile pic</label>
      <input name="profileImg" required id="profileImg" type="file" />
      <br />
      <input name="age" required type="number" placeholder="age" />
      <br />
      <label htmlFor="gender">Gender</label>
      <select name="gender" id="gender">
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>
      <br />
      <label htmlFor="preferences">Sexual preference</label>
      <select name="preferences" id="preferences">
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>
      <br />
      <input name="location" type="text" required placeholder="location" />
      <br />
      <input type="submit" value="Create profile" />
    </form>
  )
}

export default CreateProfile
