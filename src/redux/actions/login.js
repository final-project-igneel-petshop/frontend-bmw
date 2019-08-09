import axios from "axios";
import { createBrowserHistory } from "history";
import { message } from "antd";

const history = createBrowserHistory();

export const userLogin = data => dispatch => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/users/login`, data, {
      headers: { "Access-Control-Allow-Origin": "*" }
    })
    .then(res => {
      // window.localStorage.token = res.data.token
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token: res.data.data.token
          // email: res.data.user.email,
          // password: res.data.user.password
        }
      });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("isAuthenticated", true);
        message.success(`Login as ${res.data.data.fullName}`, 1);
        history.push("/");
        window.location.reload();
      }
    })
    .catch(err => {
      message.error("Login failed", 1);
    });
};
