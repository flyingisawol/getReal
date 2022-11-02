import { useEffect } from "react"

const EditProfile = ({ user }) => {
  console.log("TEST", user)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const res = await fetch('/api/getreal/edit', {
      method: "PUT",
      body: formData,
    })
    const data = await res.json()
    console.log(data)
  }
  
  const handleDelete = async (event) => {
    const res = await fetch('/api/getreal/delete', { method: 'DELETE' })
    const data = await res.json()
    console.log(data)
  }

  return (
    <>
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
      <input type="submit" value="Edit profile" />
    </form>
    <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default EditProfile
