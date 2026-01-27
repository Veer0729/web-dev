import {Link} from "react-router-dom"
import '../css/Navbar.css'

function NavBar() {
    return <div className="navbar">
        <div className="navbar-brand">
            <Link to= "/">Movie app</Link>
       </div>
       <div to= "/" className= "nav-link">
       <Link to = "/" className = "nav-link">Home</Link>
       <Link to = "/fav" className = "nav-link">Fav</Link>
       </div>
    </div>
}

export default NavBar