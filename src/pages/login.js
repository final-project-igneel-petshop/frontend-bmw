import React, { Component } from "react";
import WrappedNormalLoginForm from "../components/login";
// import Logo from "../../assets/logos/thumbpoll-logo.png";
// import { Link } from "react-router-dom";

export class LogIn extends Component {
  state = {
    size: "large"
  };
  render() {
    return (
      <div>
        <div
          style={{
            width: 400,
            margin: "0 auto",
            padding: "30px 0px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center"
            }}
          />
          <h1>Log In</h1>
          <div>
            <WrappedNormalLoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
