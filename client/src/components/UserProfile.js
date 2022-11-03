import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { useNavigate } from "react-router-dom"

const UserProfile = () => {
  const [profile, setProfile] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
  const [modalShow, setModalShow] = useState(false)

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Single and ready to mingle ? 😉</h4>
          <p>
            Add this user to your watchlist ?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handleMatch}>Match</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  useEffect(() => {
    const getProfile = async () => {
      const res = await fetch(`/api/getreal/${id}`)
      const data = await res.json()
      setProfile(data)
    }
    getProfile()
  }, [])

  const handleMatch = async () => {
    const res = await fetch("/api/match", {
      method: "PUT",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    })
    const data = await res.json()
    navigate(-1)
  }
  return (
    <div>
      {!profile ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>{profile.name}</h1>
          <img src={profile.profileImg} alt={profile.name} />
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Match
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      )}
    </div>
  )
}

export default UserProfile
