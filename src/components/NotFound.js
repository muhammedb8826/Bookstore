import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <NavLink to="/">Go back</NavLink>
    </div>
  );
}
