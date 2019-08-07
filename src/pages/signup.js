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
        <div style={{ width:"800px",display:"flex", flexDirection:"column", marginLeft:"100px"}}>
        <h1 style={{marginLeft:"400px"}}>Sign Up</h1>
          <WrappedRegistrationForm />
        <div>
          <p>By signing up, you agree to BoWowMeow's</p>
          <p>
            <b>Terms of Service & Privacy Policy.</b>
          </p>
        </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
