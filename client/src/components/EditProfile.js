import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom'

const EditProfile = ({ user }) => {
  const navigate = useNavigate()

  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Hold up!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Please note</h4>
          <p>
              Deleting your profile will de-register you from GetReal. You will need to register again if you want to start a new profile. 
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const res = await fetch('/api/getreal/edit', {
      method: "PUT",
      body: formData,
    })
    const data = await res.json()
    console.log(data)
    navigate("/getreal")
  }
  
  const handleDelete = async (event) => {
    const res = await fetch('/api/getreal/delete', { method: 'DELETE' })
    const data = await res.json()
    navigate("/login")
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" required placeholder="full-name" />
      <br />
      <label htmlFor="profileImg">Upload profile pic</label>
      <input name="profileImg" required id="profileImg" type="file" />
      <br />
      <input name="age" required type="number" min="18" placeholder="age" />
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
      <input type="submit" value="Save" />
    </form>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Delete
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default EditProfile
