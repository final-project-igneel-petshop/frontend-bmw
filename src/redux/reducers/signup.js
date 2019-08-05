const initialState = {
    responseMessage: null,
    errorMessage: null,
    isLoading: false
  };
  
  const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGNUP_BEGIN": {
        return {
          ...state,
          errorMessage: null,
          isLoading: true
        };
      }
      case "SIGNUP_SUCCESS": {
        return {
          ...state,
          responseMessage: action.payload.data,
          isLoading: false
        };
      }
      case "SIGNUP_ERROR": {
        return {
          ...state,
          errorMessage: action.payload.error,
          isLoading: false,
          responseMessage: null
        };
      }
      default:{
          return state
      }
    }
  };
  
  export default signUpReducer
  