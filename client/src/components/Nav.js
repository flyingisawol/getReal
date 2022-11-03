import { Link } from "react-router-dom"
import LogoutButton from "./LogoutButton"
import ProfileLink from "./ProfileLink"

const Nav = ({ user, setUser }) => {
  return (
    <div className="navFooter">
    <nav>
      <ProfileLink user={user}/>
      {user && <Link to="/getreal">Home</Link>}
      {user && <Link to="/getreal/search">Search</Link>}
      {user && <Link to="/getreal/edit">edit profile</Link>}
      {user && <Link to="/getreal/watchlist">Watchlist</Link>}
      {user ? (<LogoutButton setUser={setUser} />) : (<Link to="/login">Login</Link>)}
      <br />
      {user ? <p>Logged in as {user.username}</p> : (<Link to="/register">Register</Link>)}
    </nav>
    </div>
  )
}

export default Nav
