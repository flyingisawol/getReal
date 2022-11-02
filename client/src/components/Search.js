import { Routes, Route, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import SearchResults from "./SearchResults"

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
    console.log(data)
    setResults(data)
  }

  return (
    <>
      <h3>Find others in your area</h3>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          name="Search"
          id="Search"
          placeholder="Search"
          required
          minLength="3"
          onChange={(event) => {
            setQuery(event.target.value)
          }}
          value={query}
        />
        <br />
        <div className="findBtn">
          <input type="submit" value="Find a Match" />
        </div>
      </form>
      {results.map((result) => (
        <SearchResults result={result} />
      ))}
    </>
  )
}

export default Search
