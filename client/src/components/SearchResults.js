import { Routes, Route, Link } from 'react-router-dom'

const SearchResults = ({result}) => {
    return (
        <p>{result.name}</p>
    )
}

export default SearchResults