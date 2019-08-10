import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import Cart from "./components/cart";
import Home from "./components/shopCat";
import DogShop from "./components/shopDog";
import store from "./redux/store";
import Navbar from "./components/navbar";
import Category from "./components/category";
import homePage from "./components/homePage";
import Details from "./components/productDetails";
import CheckOut from "./components/checkOut";
import DogDetailsProduct from "./components/productDogDetails";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={homePage} />

            <Route path="/login" component={LogIn} />
            <Route path="/shop" component={Home} />
            <Route path="/shop-dog" component={DogShop} />
            <Route path="/category" component={Category} />
            <Route path="/signup" component={SignUp} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={Details} />
            <Route
              path="/product-dog-details/:id"
              component={DogDetailsProduct}
            />
            <Route path="/checkout/:id" component={CheckOut} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
