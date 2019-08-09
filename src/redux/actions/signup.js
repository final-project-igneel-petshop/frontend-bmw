import axios from "axios";
import { message } from "antd";
import {createBrowserHistory} from "history"

const history = createBrowserHistory()

export const signUpBegin = () => ({
  type: "SIGNUP_BEGIN"
});

export const signUpSuccess = response => ({
  type: "SIGNUP_SUCCESS",
  payload: response
});

export const signUpError = error => ({
  type: "SIGNUP_ERROR",
  payload: {
    error
  }
});

export const userSignUp = payload => {
  return dispatch => {
    dispatch(signUpBegin());

    axios
      .post(`${process.env.REACT_APP_API_URL}/users/register`, payload)
      .then(response => {
        dispatch(signUpSuccess(response));
        if (response.status === 201){
          message.success("Account successfully registered");
          history.push("/login")
          window.location.reload()
        }

       
      }) 
      .catch(error => {
        dispatch(signUpError(error));
        message.error("Registration has failed");
        console.log(error);
        
      });
  };
};
