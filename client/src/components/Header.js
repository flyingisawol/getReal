import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'

const Header = ({ user, setUser }) => {
    return (
        <nav>
            <Link to='/api/getreal/profile'>Profile</Link>
                <br/>
            <Link to='/api/getreal/search'>Search</Link>
                <br/>
            <Link to='/api/getreal/watchlist'>Watchlist</Link>
                <br/>
            { user ? <LogoutButton setUser={setUser} /> : <Link to="/api/getreal/login">Login</Link> }
      </nav>
    )
}

export default Header