import axios from 'axios'
import { message } from "antd"

export const userLogin = data => dispatch => {
        axios.post(`${process.env.REACT_APP_API_URL}/users/login`, data)
        .then(res => {
            window.localStorage.token = res.data.token
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: {
                    token: res.data.token,
                    email: res.data.user.email,
                    password: res.data.user.password
                }
            })
            message.success(`Login as ${res.data.user.fullName}`, 1)
        })
        .catch(err => {
            console.log(err);
            message.error("Login failed", 1);
          });
    
    
}
