import axios from "axios";

const getDogDetailsBegin = () => {
  return {
    type: "GET_DOG_DETAILS_BEGIN"
  };
};

const getDogDetailsSuccess = result => {
  return {
    type: "GET_DOG_DETAILS_SUCCESS",
    payload: result
  };
};

const getDogDetailsError = error => {
  return {
    type: "GET_DOG_DETAILS_ERROR",
    payload: error
  };
};

export const getDogsDetail = id => {
  return dispatch => {
    dispatch(getDogDetailsBegin());

    axios
      .get(`${process.env.REACT_APP_API_URL}/shop/find-dog/${id}`)
      .then(response => {
        dispatch(getDogDetailsSuccess(response));
      })
      .catch(error => {
        dispatch(getDogDetailsError(error));
      });
  };
};
