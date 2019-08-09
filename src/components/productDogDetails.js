import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { addToCart } from "../redux/actions/cart";
import { getDogsDetail } from "../redux/actions/getDogDetails";
import { Result, Button, Spin, Icon } from "antd";
import { Link } from "react-router-dom";

const antIcon = <Icon className="loading" type="loading" spin />;

class DogDetailsProduct extends Component {
  state = {
    getToCart: false
  };

  handleClick = id => {
    this.props.addToCart(id);
    this.setState({
      getToCart: true
    });
  };

  componentDidMount() {
    this.props.getDogsDetail(parseInt(this.props.match.params.id));
  }

  render() {
    return (
      <Fragment>
        {this.props.dogProducts.length !== 0 ? (
          <div
            key={this.props.dogProducts[0].data.product.id}
            className="column"
          >
            <div>
              <img
                src={`${process.env.REACT_APP_API_URL}${
                  this.props.dogProducts[0].data.product.imagePath
                }`}
                alt="product"
              />
            </div>
            <div>
              <h3>{this.props.dogProducts[0].data.product.title}</h3>
              <p> {this.props.dogProducts[0].data.product.description}</p>
              <p>
                <b>Price: Rp {this.props.dogProducts[0].data.product.price}</b>
              </p>
              {!this.state.getToCart ? (
                <button
                  className="waves-effect waves-light #ee6e73 red lighten-3 btn"
                  onClick={() => {
                    this.handleClick(this.props.dogProducts[0].data.product.id);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "250px"
                  }}
                >
                  <i className="material-icons">shopping_cart</i> Add to Cart
                </button>
              ) : (
                <Result
                  style={{ border: "3px solid black" }}
                  status="success"
                  title="Successfully added your item to cart"
                  // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                  extra={[
                    <Button type="primary" key="console">
                      <Link to="/shop-dog">Back to Shop</Link>
                    </Button>,
                    <Button key="buy">
                      <Link to="/cart">Go to Cart</Link>
                    </Button>
                  ]}
                />
                // <div>Silahkan menuju cart dipojok kanan atas</div>
              )}
            </div>
          </div>
        ) : (
          <Spin className="loading" indicator={antIcon} style={{ textAlign: "center" }} />
          // "Loading"
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    dogProducts: state.dogDetails.dogDetails
  };
};

export default connect(
  mapStateToProps,
  { getDogsDetail, addToCart }
)(DogDetailsProduct);
