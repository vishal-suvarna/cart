import React from "react";
class CartItem extends React.Component {
  increaseQuantity = () => {
    //   setstare form 1
    //   this.setState({
    //       qty:this.state.qty+1,
    //   });
    // // form 2 //if previous state require use this state
    this.setState((prevState)=>{
        return{
            qty:prevState.qty+1,
        }
    });
  };

  decreaseQuantity = () => {
    const { qty } = this.state;
    if (qty === 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };


  render() {
    // object destructuring
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image}></img>
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "grey" }}>{price}</div>
          <div style={{ color: "grey" }}>{qty}</div>
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
              onClick={this.decreaseQuantity}
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
