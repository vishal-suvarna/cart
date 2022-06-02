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
          id: 1,
        },
        {
          price: 1000,
          title: "shirt",
          qty: 6,
          img: "",
          id: 2,
        },
        {
          price: 29999,
          title: "Jordan shoes",
          qty: 1,
          img: "",
          id: 3,
        },
      ],
    };
  }
  //   to increase the qty
  handleIncreaseQuantity = (product) => {
    console.log("hey inc the qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };
  // to decreade the qty
  handleDecreaseQuantity = (product) => {
    console.log("hey dec the qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };
  // to del the product
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    console.log("del btn pressed", items);

    this.setState({
      products: items,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {/* <CartItem qty={1} price={9999} title={"Phoone"} img={""}></CartItem> */}
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQty={this.handleIncreaseQuantity}
              onDecreaseQty={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            ></CartItem>
          );
        })}
      </div>
    );
  }
}
export default Cart;
