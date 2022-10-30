import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <Link to='/api/getreal/login'>Login</Link>
                <br/>
            <Link to='/api/getreal/profile'>Profile</Link>
                <br/>
            <Link to='/api/getreal/search'>Search</Link>
                <br/>
            <Link to='/api/getreal/watchlist'>Watchlist</Link>
      </nav>
    )
}

export default Header