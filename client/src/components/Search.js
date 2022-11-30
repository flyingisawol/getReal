import { Routes, Route, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import SearchResults from "./SearchResults"
import { Card, Form, Button } from 'react-bootstrap'

const Search = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const handleSearchSubmit = async (event) => {
    event.preventDefault()
    const res = await fetch(`/api/getreal/search?searchTerm=${query}`, {
      method: "POST",
    })
    const data = await res.json()
    setResults(data)
  }

  return (
    <>
    <div className="content-body">
      <h3>Find others in your area</h3>
      <Form className="searchPage rounded" onSubmit={handleSearchSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          name="Search"
          id="Search"
          placeholder="Search Your City"
          required
          minLength="3"
          onChange={(event) => {
            setQuery(event.target.value)
          }}
          value={query}
        />
        <br />
        <div className="findBtn">
          <Button id="find" as="input" type="submit" value="Find a Match" />
        </div>
      {results.map((result) => (
        <SearchResults result={result} />
      ))}
      </Form.Group>
      </Form>
      </div>
    </>
  )
}

export default Search
