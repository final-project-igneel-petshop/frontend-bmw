import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { withRouter } from "react-router-dom";

const isAuthenticated = localStorage.getItem("isAuthenticated");
const Navbar = props => {
  const handleClick = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    props.history.push("/");
    window.location.reload();
  };
  return (
    <nav
      style={{
        height: "100px",
        display: "flex",
        alignItems: "center",
        background: "#2F9CB6"
      }}
      className="nav-wrapper"
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{
              // width: "100px",
              height: "100%",
              // marginBottom: "30px",
              // paddingBottom: "10px"
            }}
          />
        </Link>

        <ul >
          {isAuthenticated ? (
            <Fragment>
              <li>
                <Link style={{ fontSize: "25px" }} to="/category">Shop</Link>
              </li>
              <li onClick={handleClick}>
                <Link style={{ fontSize: "25px" }} to="/">Log Out</Link>
              </li>
              <Link  to="/cart">
                <i className="material-icons" style={{ fontSize:"35px", paddingRight:"70px"}}>shopping_cart</i>
              </Link>
            </Fragment>
          ) : (
            <li>
              <Link style={{ fontSize: "25px" }} to="/login">Log In</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
