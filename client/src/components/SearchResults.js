import { Routes, Route, Link } from 'react-router-dom'

const SearchResults = ({result}) => {
    return (
        <div className='content-body'>
        <p>{result.name}</p>
        </div>
    )
}

export default SearchResults