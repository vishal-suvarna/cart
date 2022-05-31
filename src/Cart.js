import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 100000,
          title: "iPhone",
          qty: 2,
          img: "",
          id:'1'
        },
        {
          price: 1000,
          title: "shirt",
          qty: 6,
          img: "",
          id:'2'
        },
        {
          price: 29999,
          title: "Jordan shoes",
          qty: 1,
          img: "",
          id:'3'
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {/* <CartItem qty={1} price={9999} title={"Phoone"} img={""}></CartItem> */}
        {products.map((product) => {
          return <CartItem product={product} key={product.id}></CartItem>;
        })}
      </div>
    );
  }
}
export default Cart;
