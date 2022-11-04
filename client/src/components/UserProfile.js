import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { useNavigate } from "react-router-dom"
import { Card } from "react-bootstrap"


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
        <div className="content-body">
          <Card className="card">
            <Card.Body>
          <div className="posts">
          <Card.Img src={profile.profileImg} alt={profile.name} />
          <div className="text-block1">
          <Card.Title><h1>{profile.name}</h1></Card.Title>
          <Card.Text><h1>{profile.age}</h1></Card.Text>
          <h1>{profile.location}</h1>
          </div>
          </div>
          <Button id="find" variant="primary" onClick={() => setModalShow(true)}>
            Match
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            <h3>A bit about me...</h3>
            <ul className="personality-list">
            <p> One of my favourite movies is {profile.personality[0]}</p>
            <p> If I was a dog I would be a {profile.personality[1]}</p>
            <p> On the weekend, I'd enjoy... {profile.personality[2]}</p>
            <p> On long drives home i'll be listening to {profile.personality[3]}</p>
            <p> My favourite takeout... {profile.personality[4]}</p>
          </ul>
            </Card.Body>
          </Card>
          </div>
        </>
      )}
    </div>
  )
}

export default UserProfile
