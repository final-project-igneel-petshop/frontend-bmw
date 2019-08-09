const inititalState = {
  dogDetails: [],
  isLoading: false,
  error: ""
};

const dogDetailsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "GET_DOG_DETAILS_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "GET_DOG_DETAILS_FAILED":
      return {
        ...state,
        error: action.payload
      };
    case "GET_DOG_DETAILS_SUCCESS":
      return {
        ...state,
        dogDetails: [action.payload]
      };

    default:
      return state;
  }
};

export default dogDetailsReducer;
