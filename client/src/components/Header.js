import { Link } from "react-router-dom"
import LogoutButton from "./LogoutButton"
import ProfileLink from "./ProfileLink"

const Header = ({ user, setUser }) => {
  return (
    <nav>
      <ProfileLink />
      <br />
      <Link to="/api/getreal/search">Search</Link>
      <br />
      <Link to="/api/getreal/watchlist">Watchlist</Link>
      <br />
      {user ? (
        <LogoutButton setUser={setUser} />
      ) : (
        <Link to="/api/getreal/login">Login</Link>
      )}
    </nav>
  )
}

export default Header
