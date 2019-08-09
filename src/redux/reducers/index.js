import { combineReducers } from "redux";

import logInReducer from "./login";
import signUpReducer from "./signup";
import cartReducer from "./cart";
import dogDetailsReducer from "./dogDetails";
import dogCartReducer from "./dogCart"

const rootReducer = combineReducers({
  signup: signUpReducer,
  login: logInReducer,
  cart: cartReducer,
  dogDetails: dogDetailsReducer,
  dogCart: dogCartReducer
});

export default rootReducer;
