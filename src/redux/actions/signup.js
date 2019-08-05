import axios from 'axios'
import { message } from "antd"


export const signUpBegin = () => ({
    type : 'SIGNUP_BEGIN'
})
 
export const signUpSuccess = (response) => ({
    type : 'SIGNUP_SUCCESS',
    payload : 
        response
    
})

export const signUpError = (error) => ({
    type: 'SIGNUP_ERROR',
    payload: {
        error
    }
})

export const userSignUp = payload => {
    
    return dispatch => {
        dispatch(signUpBegin())

        axios.post(`${process.env.REACT_APP_API_URL}/users/register`, payload)
        .then(response => {
            console.log(true);
            console.log(response);
            dispatch(signUpSuccess(response))
            
            message.succes("Account successfully registered")
        })
        .catch(error => {
            dispatch(signUpError(error))
            message.error("Registration has failed")
        })
    }
}
