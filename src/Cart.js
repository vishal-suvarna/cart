import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <div>
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQty={props.onIncreaseQty}
              onDecreaseQty={props.onDecreaseQty}
              onDeleteProduct={props.onDeleteProduct}
            ></CartItem>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
