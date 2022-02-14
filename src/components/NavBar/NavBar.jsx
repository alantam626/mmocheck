import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'


export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }
    return (
        <nav className="nav">
            <Link to="/index">Game Index</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/userpage">User Page</Link>
            Hi {user.name}!
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}