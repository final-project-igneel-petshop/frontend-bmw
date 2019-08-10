import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Descriptions, Result, Button, Modal } from "antd";
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
    key: `price * ${10}`,
    render: item => <span>{parseInt(item.price * item.totalQte)}</span>
  }
];

class CheckOut extends Component {
  state = {
    showResult: false
  };
  componentDidMount() {
    this.props.checkOut(parseInt(this.props.match.params.id));

    console.log(this.props);
  }

  goBackToHomePage = () => {
    this.props.history.push("/");
  };

  handleSubmit = async event => {
    event.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_API_URL}/users/send-email`, {
        userId: this.props.cart[0].userId,
        email: this.props.cart[0].email
      })
      .then(result => {
        console.log(result);
        if (result.statusText === "OK") {
          this.setState({
            showResult: true
          });
        }
      })
      .then(() => {
        axios
          .put(
            `${process.env.REACT_APP_API_URL}/shop/checkout/${
              this.props.match.params.id
            }`
          )
          .then(result => {
            console.log(result);
          })
          .then(() => {
            console.log(`then`);
          })
          .catch(error => console.log(error));
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (this.props.cart.length === 0) {
      return (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h1>CART EMPTY</h1>
        </div>
      );
    }
    return (
      <div className="checkout">
        <Modal
          visible={this.state.showResult}
          footer={null}
          onCancel={this.goBackToHomePage}
        >
          <Result
            status="success"
            title="Successfully Purchased BowWowMeoW Product!"
            subTitle="Thank You so Much, hope too see you soon"
            extra={[
              <Button key="buy" color="primary" onClick={this.goBackToHomePage}>
                Buy Again
              </Button>
            ]}
          />
        </Modal>

        <h3>Here's your summary of your order</h3>
        <Descriptions column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
          <Descriptions.Item label="Full Name">
            {this.props.cart[0].fullName}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {this.props.cart[0].email}
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {this.props.cart[0].street}
          </Descriptions.Item>
          <Descriptions.Item label="City">
            {this.props.cart[0].city}
          </Descriptions.Item>
          <Descriptions.Item label="Zip Code">
            {this.props.cart[0].zipCode}
          </Descriptions.Item>
          <Descriptions.Item label="Total">
            Rp {this.props.cart[0].totalPrice}
          </Descriptions.Item>
        </Descriptions>

        <div>
          <div style={{ height: "2px", margin: "20px 0" }} />
          <h3>Items ordered: </h3>
          <Table
            columns={columns}
            dataSource={this.props.cart}
            pagination={{ pageSize: 5 }}
          />
        </div>
        <div>
          <Button type="primary" onClick={this.handleSubmit} block>
            Send This Recipe To My Email !
          </Button>
          <Button type="danger" block>
            Back To Home
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    cart: state.cart.items
    // userId:
  };
};

export default connect(
  mapStateToProps,
  { checkOut }
)(CheckOut);
