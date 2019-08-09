import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../redux/actions/cart"; 

import {
  addQuantityDog,
  removeItemDog,
  subtractQuantityDog
} from "../redux/actions/dogCart";
import Recipe from "./recipe";
import RecipeDog from "./recipeDog";

// import Recipe from "./recipe";
class Cart extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };

  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };

  handleAddQuantityDog = id => {
    this.props.addQuantityDog(id);
  };
  handleSubtractQuantityDog = id => {
    this.props.subtractQuantityDog(id);
  };
  handleRemoveDog = id => {
    this.props.removeItemDog(id);
  };

  render() {
    const { items, addedDogProductsItems } = this.props;

    if (items.length === 0) {
      return (
        <Fragment>
          {addedDogProductsItems.map((item, index) => {
            return (
              <div key={index}>
                <ul className="collection">
                  <li className="collection-item avatar" key={item.id}>
                    <div className="item-img">
                      <img
                        src={`${process.env.REACT_APP_API_URL}${
                          item.imagePath
                        }`}
                        alt={item.img}
                      />
                    </div>

                    <div className="item-desc">
                      <span className="title">{item.title}</span>
                      <p>{item.desc}</p>
                      <p>
                        <b>Price: Rp {item.price}</b>
                      </p>
                      <p>
                        <b>Quantity: {item.quantity}</b>
                      </p>
                      <div className="add-remove">
                        <span
                          onClick={() => {
                            this.handleAddQuantityDog(item.id);
                            this.forceUpdate();
                          }}
                        >
                          <i className="material-icons">arrow_drop_up</i>
                        </span>

                        <i
                          className="material-icons"
                          onClick={() => {
                            this.handleSubtractQuantityDog(item.id);
                            this.forceUpdate();
                          }}
                        >
                          arrow_drop_down
                        </i>
                      </div>
                      <button
                        className="waves-effect waves-light btn pink remove"
                        onClick={() => {
                          this.handleRemoveDog(item.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
          <RecipeDog />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          {items.map((item, index) => {
            return (
              <div key={index}>
                <ul className="collection">
                  <li className="collection-item avatar" key={item.id}>
                    <div className="item-img">
                      <img
                        src={`${process.env.REACT_APP_API_URL}${
                          item.imagePath
                        }`}
                        alt={item.img}
                      />
                    </div>

                    <div className="item-desc">
                      <span className="title">{item.title}</span>
                      <p>{item.desc}</p>
                      <p>
                        <b>Price: Rp {item.price}</b>
                      </p>
                      <p>
                        <b>Quantity: {item.quantity}</b>
                      </p>
                      <div className="add-remove">
                        <span
                          onClick={() => {
                            this.handleAddQuantity(item.id);
                            this.forceUpdate();
                          }}
                        >
                          {" "}
                          <i className="material-icons">arrow_drop_up</i>
                        </span>

                        <i
                          className="material-icons"
                          onClick={() => {
                            this.handleSubtractQuantity(item.id);
                            this.forceUpdate();
                          }}
                        >
                          arrow_drop_down
                        </i>
                      </div>
                      <button
                        className="waves-effect waves-light btn pink remove"
                        onClick={() => {
                          this.handleRemove(item.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
          <Recipe />
        </Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.addedItems,
    addedDogProductsItems: state.dogCart.addedDogProductsItems
  };
};

export default connect(
  mapStateToProps,
  {
    removeItem,
    addQuantity,
    subtractQuantity,
    addQuantityDog,
    removeItemDog,
    subtractQuantityDog
  }
)(Cart);
