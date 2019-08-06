import {combineReducers} from 'redux'
import logInReducer from './login';
import signUpReducer from './signup';
import cartReducer from './cart';

const rootReducer = combineReducers({
    signup: signUpReducer,
    login: logInReducer,
    cart: cartReducer
})

export default rootReducer