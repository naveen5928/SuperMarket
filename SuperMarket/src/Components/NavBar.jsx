import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const getCLassName = ({ isActive }) => {
    return isActive ? "active" : "";
  };
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink to="/" className={getCLassName}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={getCLassName}>
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" className={getCLassName}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart (0)
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
