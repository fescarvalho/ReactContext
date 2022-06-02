import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'noActive')}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'active' : 'noActive')}
        >
          Produtos
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : 'noActive')}
        >
          About
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
