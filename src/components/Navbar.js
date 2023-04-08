import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>
        <NavLink to="/" className="site-title">
          Bookstore CMS
        </NavLink>
      </h1>
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
