import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import jwt from "jsonwebtoken";
import { withRouter } from "react-router-dom";
//import { addShipping } from './actions/cartActions'

class Recipe extends Component {
  state = {
    decoded: {}
  };

  componentDidMount() {
    const decoded = jwt.decode(localStorage.getItem("token"));
    this.setState({
      decoded
    });
  }

  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping();
  }

  handleChecked = e => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addedItems.forEach(item => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/shop/checkout`, {
          totalPrice: this.props.total,
          totalQte: item.quantity,
          userId: this.state.decoded.id,
          catProductId: item.id
        },{
          headers: { "Access-Control-Allow-Origin": "*" }})
        .then(result => {
          this.props.history.push(`/checkout/${this.state.decoded.id}`);
          // window.location.reload();
        })
        .catch(error => console.log(error));
    });
  };

  render() {
    return (
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <label>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChecked}
              />
              <span>Shipping(+Rp 20000)</span>
            </label>
          </li>
          <li className="collection-item">
            <b>Total: Rp {this.props.total} </b>
          </li>
        </div>
        <div className="checkout">
          <button
            onClick={this.handleSubmit}
            className="waves-effect waves-light btn"
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  
  return {
    addedItems: state.cart.addedItems,
    total: state.cart.total,
    addedDogProductsItems: state.cart.addedDogProductsItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Recipe)
);
