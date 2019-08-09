import React from "react";
import { Form, Input, Checkbox, Button, message } from "antd";
import { userSignUp } from "../../src/redux/actions/signup";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    street: "",
    city: "",
    zipcode: "",
    // confirmPassword: ""
    isSuccess: false
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.userSignUp({
          fullName: values.fullName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          password: values.password,
          // confirmPassword: values.confirmPassword
          street: values.street,
          city: values.city,
          zipcode: values.zipcode
        });
        // this.props.history.push("/");
      } else {
        message.error("All fields must be entered");
      }
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    // const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
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

    return this.state.isSuccess === true ? (
      <Redirect to="/login" />
    ) : (
      <div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Fullname">
            {getFieldDecorator("fullName", {
              rules: [
                {
                  required: true,
                  message: "Please input your Fullname!"
                }
              ]
            })(<Input />)}
          </Form.Item>

          <Form.Item label="E-mail">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your password!"
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "Please confirm your password!"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item label="Phone Number">
            {getFieldDecorator("phoneNumber", {
              rules: [
                { required: true, message: "Please input your phone number!" }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Street">
            {getFieldDecorator("street", {
              rules: [
                { required: true, message: "Please input your street address!" }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="City">
            {getFieldDecorator("city", {
              rules: [{ required: true, message: "Please input your city!" }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="ZIP Code">
            {getFieldDecorator("zipcode", {
              rules: [
                { required: true, message: "Please input your ZIP code!" }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item style={{ padding: "0px" }} {...tailFormItemLayout}>
            {getFieldDecorator("agreement", {
              valuePropName: "checked"
            })(<Checkbox>I have read the agreement</Checkbox>)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);
const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { userSignUp }
)(withRouter(WrappedRegistrationForm));
