import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "antd";
import axios from "axios";
import { checkOut } from "../redux/actions/cart";

const columns = [
  {
    title: "",
    key: "imagePath",
    render: item => (
      <img
        src={`http://bowwowmeow-api.herokuapp.com${item.imagePath}`}
        alt="imageCart"
        width="100"
        height="100"
      />
    )
  },
  {
    title: "Product",
    dataIndex: "title",
    key: "title"
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price"
  },
  {
    title: "Quantity",
    dataIndex: "totalQte",
    key: "totalQte"
  },
  {
    title: "Total",
    key: "price",
    render: item => <span>{parseInt(item.price * item.totalQte)}</span>
  }
];

class CheckOut extends Component {
  componentDidMount() {
    this.props.checkOut(parseInt(this.props.match.params.id));

    console.log(this.props)
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.cart.forEach(props => {
      console.log(this.props);

      axios
        .put(`${process.env.REACT_APP_API_URL}/shop/checkout/${this.props.match.params.id}`, {
          status: true
        })
        .then(result => {
          this.props.history.push(`/`);
          // window.location.reload();
          console.log(result);
        })
        .catch(error => console.log(error));
    });
  };

  render() {
    if (this.props.cart.length === 0) {
      return <div>cart empty</div>;
    }
    return (
      <div className="checkout">
        <h3>Here's your summary of your order</h3>
        <div>
          <h5> Shipping Address</h5>
          <h6> Fullname :{this.props.cart[0].fullName} </h6>
          <h6> Email :{this.props.cart[0].email} </h6>
          <h6> Street :{this.props.cart[0].street} </h6>
          <h6> City :{this.props.cart[0].city} </h6>
          <h6> {this.props.cart[0].zipcode} </h6>
        </div>
        <div>
          <h5>Items ordered: </h5>
          <Table columns={columns} dataSource={this.props.cart} />
          <h1>Rp {this.props.cart[0].totalPrice}</h1>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.items
    // userId: 
  };
};

export default connect(
  mapStateToProps,
  { checkOut }
)(CheckOut);
