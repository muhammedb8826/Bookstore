import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="site-title">
        Bookstore CMS
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
  );
}
