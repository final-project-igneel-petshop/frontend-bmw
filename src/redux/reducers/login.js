const initialState = {
    responseMessage: null,
    token: null,
    name: null,
    email: null,
    isSuccess: false
}

const logInReducer = (state = initialState, action)=> {
    switch (action.type) {
        case "LOGIN_SUCCESS" : {
            return {
                ...state,
                ...action.payload,
                isSuccess: true
            }
        }
        default: {
            return state
        }
    }
}

export default logInReducer