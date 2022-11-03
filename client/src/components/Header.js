import { Link } from "react-router-dom"
import LogoutButton from "./LogoutButton"
import ProfileLink from "./ProfileLink"

const Header = ({ user, setUser, profiles }) => {
  return (
    <nav>
      {/* <ProfileLink user={user}/> */}
      <br />
      <Link to="/getreal/search">Search</Link>
      <br />
      <Link to="/getreal/edit">edit profile</Link>
      <br />
      <Link to="/getreal/watchlist">Watchlist</Link>
      <br />
      {user ? (<LogoutButton setUser={setUser} />) : (<Link to="/getreal/login">Login</Link>)}
      <br />
      {user ? <p>Logged in as {user.username}</p> : (<Link to="/getreal/register">Register</Link>)}

    </nav>
  )
}

export default Header
