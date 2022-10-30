import { Routes, Route, Link } from 'react-router-dom'
const Search = () => {
    return (
    <>
    <h3>Find others in your area</h3>
    <form method="get" action="/getreal/search">
    <input
    type="text"
    name="Search"
    id="Search"
    placeholder="Search"
    required
    minlength="3"
    />
    <br />
    <div class="findBtn">
        <input type="submit" value="Find a Match" />
    </div>
    </form>
    </>
    )
}

export default Search