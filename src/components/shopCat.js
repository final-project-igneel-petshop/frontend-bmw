import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, getItem } from "../redux/actions/cart";

class Home extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  componentDidMount() {
    this.props.getItem();
  }
  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <Link to={`/product/${item.id}`}>
              <img src={`${process.env.REACT_APP_API_URL}${item.imagePath}`} alt="cutty-cat"/>
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
        <h2 className="center">Cat Food</h2>
        <div className="box">{itemList}</div>
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
// const mapDispatchToProps = dispatch => {
//   return {
//     getItem,
//     addToCart: id => {
//       dispatch(addToCart(id));
//     }
//   };
// };

export default connect(
  mapStateToProps,
  { addToCart, getItem }
)(Home);
