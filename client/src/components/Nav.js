import { Link } from "react-router-dom"
import LogoutButton from "./LogoutButton"
import ProfileLink from "./ProfileLink"

const Nav = ({ user, setUser }) => {
  return (
    <div className="navFooter">
      <nav>
        <div className="icons">
        <ProfileLink user={user} />
        {user && <Link to="/getreal"><img src="../images/home.png" alt=""/></Link>}
        {user && <Link to="/getreal/search"><img src="../images/search.png" alt=""/></Link>}
        {user && <Link to="/getreal/watchlist"><img src="../images/list.png" alt=""/></Link>}
        {user && <Link to="/getreal/edit"><img src="../images/profile.png" alt=""/></Link>}
        {user ? (
          <LogoutButton setUser={setUser} />
          ) : (
            <Link to="/login"></Link>
            )}
        <br />
            </div>
      </nav>
    </div>
  )
}

export default Nav
