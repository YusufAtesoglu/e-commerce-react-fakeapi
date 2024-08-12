import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
        <div className="container"><div></div>
            <NavLink className="navbar-brand fw-bold fs-4" to="">
            NEW COLLECTİON
          </NavLink>
        <ul className="nav mx-auto  ">
  <li className="nav-item">
    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/products">Products</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/about">About</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/contact">Contact</NavLink>
  </li>

</ul>
<div className="buttons">
    <NavLink to="/login" className="btn btn-outline-dark">
        <i className="fa fa-sign-in me-1"></i>Login</NavLink>
        <NavLink to="/register" className="btn btn-outline-dark ms-2">
        <i className="fa fa-user-plus me-1"></i>Register</NavLink>
        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
        <i className="fa fa-shopping-cart me-1"></i>Cart(0)</NavLink>
</div>
        </div>
      </nav>
    </div>
  );
}
