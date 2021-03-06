import React, { Component } from "react";
import { Link } from "react-router-dom";
import CatImage from "../images/cat.jpg";
import DogImage from "../images/dog.jpg";

class Category extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#eee6d3" }}>
        <div style={{ padding: "0 100px" }}>
          <h1
            style={{
              fontSize: "50px",
              opacity: "0.5",
              marginTop: "0",
              paddingTop: "20px"
            }}
          >
            BOWOWMEOW Shop
          </h1>
          <p style={{ fontSize: "25px", paddingRight: "20%" }}>
            Love the products sold at BWM Shop, but not Jakarta’s traffic? Or
            you live too far away to visit our stores? From the comfort of your
            home, select the products you’d like to buy, and we will ship them
            to you, to any location in Indonesia. The BWM online shop only
            includes a small selection of the wide pet supplies assortment
            available at the BWM stores. If you are looking for a specific
            product, please call the BWM stores and we will be happy to help.
          </p>
          <div className="column">
            <Link to="/shop">
              <img
                style={{
                  width: "450px",
                  height: "450px",
                  borderRadius: "50%",
                  border: "3px solid #2F9CB6"
                }}
                src={CatImage}
                alt="cat"
              />
            </Link>
            <Link to="/shop-dog">
              <img
                style={{
                  width: "450px",
                  height: "450px",
                  borderRadius: "50%",
                  border: "3px solid #2F9CB6"
                }}
                src={DogImage}
                alt="dog"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
