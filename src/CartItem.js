import React from "react";
const CartItem = (props) => {
  // object destructuring
  const { price, title, qty } = props.product;
  const { product, onIncreaseQty, onDecreaseQty, onDeleteProduct } = props;
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
            onClick={() => onIncreaseQty(product)}
          ></img>
          <img
            alt="decrease"
            className="actions-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            onClick={() => onDecreaseQty(product)}
          ></img>
          <img
            alt="delete"
            className="actions-icons"
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            onClick={() => onDeleteProduct(product.id)}
          ></img>
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
