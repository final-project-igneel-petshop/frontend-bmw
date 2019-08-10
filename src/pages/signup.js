import React, { Component } from "react";
import { Form } from "antd";

import WrappedRegistrationForm from "../components/signup";
// import Logo from "../../images/logos/";
// import { Link } from "react-router-dom";

export class SignUp extends Component {
  state = {
    size: "large"
  };
  render() {
    const tailFormItemLayout = {
      marginBottom: 0,
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>Sign Up</h1>
          <WrappedRegistrationForm />
          <Form.Item {...tailFormItemLayout}>
            <p>By signing up, you agree to BoWowMeow's</p>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <p>
              <b>Terms of Service & Privacy Policy.</b>
            </p>
          </Form.Item>
        </div>
      </div>
    );
  }
}

export default SignUp;
