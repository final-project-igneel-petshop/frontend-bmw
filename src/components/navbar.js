import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import Logo from '../images/logo.jpg'
const isAuthenticated = localStorage.getItem("isAuthenticated");
const Navbar = () => {
  return (
    <nav
      style={{ height: "100px", display: "flex", alignItems: "center" }}
      className="nav-wrapper"
    >
      <div className="container">
        <Link to="/" className="brand-logo">
          BoWowMeow
        </Link>

        <ul className="right">
          {isAuthenticated ? (
            <Fragment>
              <li>
                <Link to="/category">Shop</Link>
              </li>
              <li>
                <Link to="/">Log Out</Link>
              </li>
              <Link to="/cart">
              <i className="material-icons">shopping_cart</i>
            </Link>
            </Fragment>

          ) :  <li>
          <Link to="/login">Log In</Link>
        </li>}
          
          
            
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
