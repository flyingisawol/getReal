import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import '../App.css'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {Form} from 'react-bootstrap'

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
    <div className='content-body'>
    <div className='edit_page'>
      <Form className='edit_form rounded' onSubmit={handleSubmit}>
        <Form.Group>
      <h2>Edit Profile</h2>
          <Form.Control name="name" type="text" required placeholder="full-name" />
          <br />
          <label htmlFor="profileImg">Upload profile pic</label>
          <Form.Control name="profileImg" required id="profileImg" type="file" />
          <br />
          <Form.Control name="age" required type="number" placeholder="age" />
          <br />
          <Form.Label htmlFor="gender">Gender</Form.Label>
          <Form.Select name="gender" id="gender">
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </Form.Select>
          <br />
          <Form.Label htmlFor="preferences">Sexual preference</Form.Label>
          <Form.Select name="preferences" id="preferences">
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </Form.Select>
          <br />
          <Form.Control name="location" type="text" required placeholder="location" />
          <br />
          {/* <input type="submit" value="Save" /> */}
          <Button id="saveBtn" as='input' type='submit' value='Save' />
        </Form.Group>
      </Form>
      <Button id='delete-profile'variant="danger" onClick={() => setModalShow(true)}>
        Delete
      </Button>


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
      </div>
      </div>
      </>
  )
}

export default EditProfile
