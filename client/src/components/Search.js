import { Routes, Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Search = ({ query, setQuery }) => {
    const navigate = useNavigate()

    const handleSearchSubmit = async (event) => {
        event.preventDefault()
        const searchQuery = new FormData(event.target)
        const res = await fetch('/api/getreal/search', {
          method: 'POST',
          body: searchQuery
        })
        const data = await res.json()
        // console.log(data)
        setQuery(data)
        navigate('/api/getreal/searchresults')
    }

    return (
    <>
    <h3>Find others in your area</h3>
    <form onSubmit={handleSearchSubmit} >
    <input
    type="text"
    name="Search"
    id="Search"
    placeholder="Search"
    required
    minLength="3"
    />
    <br />
    <div className="findBtn">
        <input type="submit" value="Find a Match" />
    </div>
    </form>
    </>
    )
}

export default Search
