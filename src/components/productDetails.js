import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { findOne, addToCart } from "../redux/actions/cart";

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
    console.log(this.props);
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
                  class="waves-effect waves-light #ee6e73 red lighten-3 btn"
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
                <div>Silahkan menuju cart dipojok kanan atas</div>
              )}
            </div>
          </div>
        ) : (
          "Loading"
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);

  return {
    items: state.cart.itemDetails,
  };
};
export default connect(
  mapStateToProps,
  { findOne, addToCart }
)(Details);
