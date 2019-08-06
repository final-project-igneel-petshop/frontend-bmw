import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, GET_ITEM, FIND_ONE} from './cart-type'
import axios from 'axios';

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

// export const addToCart= (userid, productid)=> dispatch =>{
//     axios.post(`${process.env.REACT_APP_API_URL}/add-to-cart/${userid}/${productid}`)
//     .then(res =>{console.log(true)
//         dispatch({
//             type: ADD_TO_CART,
//             userid,
//             productid
//         })
//     })
// }
// export const removeItem= (userid)=> dispatch =>{
//     axios.delete(`${process.env.REACT_APP_API_URL}/cart/${userid}`, userid)
//     .then(res =>{console.log(res)
//         dispatch({
//             type: REMOVE_ITEM,
//             userid
//         })
//     })
// }
// export const subtractQuantity=(userid)=> dispatch =>{
//     axios.delete(`${process.env.REACT_APP_API_URL}/cart/${userid}`,userid)
//     .then(res =>{console.log(true)
//         dispatch({
//             type: SUB_QUANTITY,
//             userid
//         })
//     })
// }
// export const addQuantity=(userid)=> dispatch =>{
//     axios.post(`${process.env.REACT_APP_API_URL}/cart/${userid}`,userid)
//     .then(res =>{console.log(res)
//         dispatch({
//             type: ADD_QUANTITY,
//             userid
//         })
//     })
// }

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

export const findOne = id => dispatch => {
    // const { id } = this.props.match.params;
    return axios.get(`${process.env.REACT_APP_API_URL}/shop/find/${id}`)
    .then(res => {
        console.log(res);

        dispatch({
            type: FIND_ONE,
            payload: res
        })
        
    })
}