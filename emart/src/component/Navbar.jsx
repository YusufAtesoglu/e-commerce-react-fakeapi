import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
        <div className="container"><div></div>
            <a className="navbar-brand fw-bold fs-4" href="#">
            NEW COLLECTİON
          </a>
        <ul className="nav mx-auto  ">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Products</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contact</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " href="#">Disabled</a>
  </li>
</ul>
<div className="buttons">
    <a href="" className="btn btn-outline-dark">
        <i className="fa fa-sign-in me-1"></i>Login</a>
        <a href="" className="btn btn-outline-dark ms-2">
        <i className="fa fa-user-plus me-1"></i>Register</a>
        <a href="" className="btn btn-outline-dark ms-2">
        <i className="fa fa-shopping-cart me-1"></i>Cart(0)</a>
</div>
        </div>
      </nav>
    </div>
  );
}
