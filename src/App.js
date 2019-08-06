import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import "./index.css"
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import Cart from "./components/cart";
import Home from "./components/shopCat";
import store from "./redux/store";
import Navbar from './components/navbar'
import Category from "./components/category";
import HomePage from "./components/homePage"
import Details from "./components/productDetails"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <Navbar/>
          <Switch>
          <Route path="/login" component={LogIn} />
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/signup" component={SignUp} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={Details}/>
          </Switch>         
        </Router>
      </Provider>
    );
  }
}

export default App;
