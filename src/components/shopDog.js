import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCartDog, getDogItem } from "../redux/actions/dogCart";

class DogShop extends Component {
  handleClick = id => {
    this.props.addToCartDog(id);
  };

  componentDidMount() {
    this.props.getDogItem();
  }

  render() {
    let itemList = this.props.dogProducts.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <Link to={`/product-dog-details/${item.id}`}>
              <img
                src={`${process.env.REACT_APP_API_URL}${item.imagePath}`}
                alt="cutty-dog"
              />
            </Link>

            <div
              to="/product"
              className="btn-floating halfway-fab waves-effect waves-light pink"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="material-icons">add</i>
            </div>
          </div>
          <div className="card-content">
            <p className="card-title">{item.title}</p>
            <p>{item.desc}</p>
            <p>
              <b>Price: Rp {item.price}</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h2 className="center">Dog Food</h2>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogProducts: state.cart.dogProducts
  };
};

export default connect(
  mapStateToProps,
  { addToCartDog, getDogItem }
)(DogShop);
