import React, { Component } from "react";
import { connect } from "react-redux";
import { findOne, addToCart } from "../redux/actions/cart";

class Details extends Component {

  handleClick = id => {
    this.props.addToCart(id)
  }
  
  componentDidMount() {
    this.props.findOne(parseInt(this.props.match.params.id));
    console.log(this.props);
  }
  render() {
    return (
      <div key={this.props.items.id} className="column">
        <div>
          <img
            src={`${process.env.REACT_APP_API_URL}${
              this.props.items.imagePath
            }`}
          />
        </div>
        <div>
          <h3>{this.props.items.title}</h3>
          <p> {this.props.items.description}</p>
          <p>
            <b>Price: Rp {this.props.items.price}</b>
          </p>
          <a
            class="waves-effect waves-light #ee6e73 red lighten-3 btn"
            onClick={() => {
              this.handleClick(this.props.items.id);
            }}
            style={{ display:"flex",alignItems:"center", width:"250px"}}
          >
            <i className="material-icons">shopping_cart</i> Add to Cart
          </a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);

  return {
    items: state.cart.items
  };
};
export default connect(
  mapStateToProps,
  { findOne, addToCart }
)(Details);
