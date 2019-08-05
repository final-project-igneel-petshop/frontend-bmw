import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/cart";
import CatImage from "../images/cat.jpg";
import DogImage from "../images/dog.jpg";

class Category extends Component {
  render() {
    return (
      <div style={{padding:"100px"}}>
        <h1 style={{ fontSize: "50px", backgroundColor: "rgba(0,0,0,.10)", opacity:"0.5"}}>
          BoWowMeow Shop
        </h1>
        <p style={{fontSize: "25px", paddingRight: "20%"}}>
          Love the products sold at BWM Shop, but not Jakarta’s traffic? Or you
          live too far away to visit our stores? From the comfort of your home,
          select the products you’d like to buy, and we will ship them to you,
          to any location in Indonesia. The BWM online shop only includes a
          small selection of the wide pet supplies assortment available at the
          BWM stores. If you are looking for a specific product, please call the
          BWM stores and we will be happy to help.
        </p>
        <div class="column">
          <Link to="./">
            <img
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%"
              }}
              src={CatImage}
              alt="cat"
            />
          </Link>
          <Link to="./">
            <img
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%"
              }}
              src={DogImage}
              alt="dog"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Category;
