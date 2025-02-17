import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">
        <Link to="/" className="nav-link">
          My Blog
        </Link>
      </h1>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
