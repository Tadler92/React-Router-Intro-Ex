import { Link, NavLink } from "react-router-dom";

import './NavBar.css'

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to='/'>Vending Machine</NavLink>
      <NavLink to='/chips'>Chips</NavLink>
      <NavLink to='/cookies'>Cookies</NavLink>
      <NavLink to='/drinks'>Drinks</NavLink>
    </nav>
  );
}


export default NavBar;