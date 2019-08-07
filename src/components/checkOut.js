import React, { Component } from "react"; 
import {connect} from "react-redux"
import {checkOut} from "../redux/actions/cart";


class CheckOut extends Component {
  componentDidMount() {
    this.props.checkOut(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <h3>Here's your summary of your order</h3>
        <div>
          <h5> Shipping Address</h5>
          <h6> {this.props.users.fullName} </h6>
          <h6> {this.props.users.email} </h6>
          <h6> {this.props.users.street} </h6>
          <h6> {this.props.users.city} </h6>
          <h6> {this.props.users.zipcode} </h6>
        </div>
        <div>
          <h5>Items ordered: </h5>
          <table>
            <thead>
              <tr>
                <th />
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map(item => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt="imageCart" />
                    </td>
                    <td>{item.title}</td>
                    <td>{parseInt(item.price)}</td>
                    <td>{item.qte}</td>
                    <td>{parseInt(item.price * item.qte)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
    console.log(state);
  
    return {
      users: state.users
    };
  };
  export default connect(
    mapStateToProps,
    { checkOut }
  )(CheckOut);
  
