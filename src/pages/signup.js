import React, { Component } from "react";
import WrappedRegistrationForm from "../components/signup";
// import Logo from "../../images/logos/";
// import { Link } from "react-router-dom";

export class SignUp extends Component {
  state = {
    size: "large"
  };
  render() {
    return (
      <div>
        <div
          style={{
            width: 480,
            margin: "0 auto",
            padding: "30px 0px",
            background: "#f5f5f5"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h1>Sign Up</h1>
            <div>
              <WrappedRegistrationForm />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <p style={{ marginBottom: 0 }}>
                By signing up, you agree to BoWowMeow's
              </p>
              <p>
                <b>Terms of Service & Privacy Policy.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
