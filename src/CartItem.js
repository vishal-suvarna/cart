import React from "react";
class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 100000,
      title: "iPhone",
      qty: 2,
      img: "",
    };
    // this.increaseQuantity=this.increaseQuantity.bind(this);
  }

  increaseQuantity=()=>{
      console.log('this',this.state);
  }
  render() {
    // object destructuring
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image}></img>
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ fontSize: 20, color: "grey" }}>{price}</div>
          <div style={{ fontSize: 15, color: "grey" }}>{qty}</div>
          <div className="cart-item-actions">
            {/* buttons */}
            <img
              alt="increase"
              className="actions-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={this.increaseQuantity}
            ></img>
            <img
              alt="decrease"
              className="actions-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            ></img>
            <img
              alt="delete"
              className="actions-icons"
              src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1653972604~hmac=e7baaa3528a0ea53bfb6aa4f890d09fb"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
