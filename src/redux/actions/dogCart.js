import { GET_ITEM, FIND_ONE, CHECK_OUT, GET_DOG_ITEM } from "./cart-type";
import axios from "axios";

export const addToCartDog = id => {
  return {
    type: "ADD_TO_CART_DOG",
    id
  };
};

//remove item action
export const removeItemDog = id => {
  return {
    type: "REMOVE_ITEM_DOG",
    id
  };
};
//subtract qt action
export const subtractQuantityDog = id => {
  return {
    type: "SUB_QUANTITY_DOG",
    id
  };
};
//add qt action
export const addQuantityDog = id => {
  return {
    type: "ADD_QUANTITY_DOG",
    id
  };
};

export const getItem = () => dispatch => {
  return axios.get(`${process.env.REACT_APP_API_URL}/shop/shop`).then(res => {
    dispatch({
      type: GET_ITEM,
      payload: res
    });
  });
};

export const getDogItem = () => dispatch => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/shop/dog-shop`)
    .then(res => {
      dispatch({
        type: GET_DOG_ITEM,
        payload: res
      });
    });
};

export const findOne = id => dispatch => {
  // const { id } = this.props.match.params;
  return axios
    .get(`${process.env.REACT_APP_API_URL}/shop/find/${id}`)
    .then(res => {
      dispatch({
        type: FIND_ONE,
        payload: res
      });
    });
};

export const checkOut = id => dispatch => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/shop/checkout/${id}`)
    .then(res => {
      dispatch({
        type: CHECK_OUT,
        payload: res
      });
    });
};
