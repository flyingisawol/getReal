import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import '../App.css'

import {Button, Form} from 'react-bootstrap'


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
    navigate('/getreal/questionnaire')
  }

  return (
    <Form className='create_page rounded' onSubmit={handleSubmit}>

      <Form.Group>

        <Form.Control name="name" type="text" required placeholder="full-name" />
        <br />
        <Form.Label htmlFor="profileImg">Upload profile pic</Form.Label>
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
        {/* <input type="submit" value="Create profile" /> */}
        <Button as='input' type='submit' value='Save' />

      </Form.Group>

    </Form>
  )
}

export default CreateProfile
