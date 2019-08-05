import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import "./index.css"
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import Cart from "./components/cart";
import Home from "./components/home";
import store from "./redux/store";
import Navbar from './components/navbar'
import Category from "./components/category";
import homePage from "./components/homePage"

class App extends Component {
  render() {
    return (
      <Provider style={{backgroundColor: "" }} store={store}>
        <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
