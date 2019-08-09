import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { findOne, addToCart } from "../redux/actions/cart";
import { Result, Button, Icon, Spin } from "antd";
import { Link } from "react-router-dom";

const antIcon = <Icon className="loading" type="loading" spin />;

class Details extends Component {
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
    this.props.findOne(parseInt(this.props.match.params.id));
  }

  render() {
    return (
      <Fragment>
        {this.props.items.length !== 0 ? (
          <div key={this.props.items[0].id} className="column">
            <div>
              <img
                src={`${process.env.REACT_APP_API_URL}${
                  this.props.items[0].imagePath
                }`}
                alt="product"
              />
            </div>
            <div>
              <h3>{this.props.items[0].title}</h3>
              <p> {this.props.items[0].description}</p>
              <p>
                <b>Price: Rp {this.props.items[0].price}</b>
              </p>
              {!this.state.getToCart ? (
                <button
                  className="waves-effect waves-light #ee6e73 red lighten-3 btn"
                  onClick={() => {
                    this.handleClick(this.props.items[0].id);
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
                // <div>Silahkan menuju cart dipojok kanan atas</div>
                <Result
                  style={{ border: "3px solid black" }}
                  status="success"
                  title="Successfully added your item to cart"
                  // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                  extra={[
                    <Button type="primary" key="console">
                      <Link to="/shop">Back to Shop</Link>
                    </Button>,
                    <Button key="buy">
                      <Link to="/cart">Go to Cart</Link>
                    </Button>
                  ]}
                />
              )}
            </div>
          </div>
        ) : (

          <Spin className= "loading" indicator={antIcon} style={{ textAlign: "center" }} />
          // "Loading"
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.itemDetails
  };
};

export default connect(
  mapStateToProps,
  { findOne, addToCart }
)(Details);
