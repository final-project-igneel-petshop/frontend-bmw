import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, GET_ITEM} from './cart-type'
import axios from 'axios';

export const addToCart= (id)=> dispatch =>{
    axios.post(`${process.env.REACT_APP_API_URL}`, id)
    .then(res =>{console.log(true)
        dispatch({
            type: ADD_TO_CART,
            id
        })
    })
}
export const removeItem= (id)=> dispatch =>{
    axios.delete(`${process.env.REACT_APP_API_URL}`, id)
    .then(res =>{console.log(res)
        dispatch({
            type: REMOVE_ITEM,
            id
        })
    })
}
export const subtractQuantity=(id)=> dispatch =>{
    axios.delete(`${process.env.REACT_APP_API_URL}`, id)
    .then(res =>{console.log(true)
        dispatch({
            type: SUB_QUANTITY,
        id
        })
    })
}
export const addQuantity=(id)=> dispatch =>{
    axios.post(`${process.env.REACT_APP_API_URL}`, id)
    .then(res =>{console.log(true)
        dispatch({
            type: ADD_QUANTITY,
        id
        })
    })
}

export const getItem = () => dispatch => {
    console.log(true);
    
   return axios.get(`${process.env.REACT_APP_API_URL}/shop/shop`)
    .then(res => {
        console.log(res);
        
        dispatch({
        type: GET_ITEM,
        payload: res
    })})
}