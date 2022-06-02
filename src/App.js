import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 100000,
          title: "iPhone",
          qty: 2,
          img: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          id: 1,
        },
        {
          price: 1000,
          title: "shirt",
          qty: 6,
          img: "https://media.istockphoto.com/photos/mens-shortsleeve-tshirt-mockup-in-front-and-back-views-picture-id1328049157?s=612x612",
          id: 2,
        },
        {
          price: 29999,
          title: "Jordan shoes",
          qty: 1,
          img: "https://images.unsplash.com/photo-1615420830426-a3484174cf1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80",
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

  // 
  getCartCount=()=>{
    const {products}=this.state;
    let count=0;

    products.forEach((product)=>{
      count += product.qty;
    })

    return count;
  }

  // 
  getCartTotal=()=>{
    const {products}=this.state;

    let cartTotal=0;
    products.map((product)=>{
      cartTotal=cartTotal+product.qty * product.price;
    })
    return cartTotal;
  }

  render() {
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
        products={products}
          onIncreaseQty={this.handleIncreaseQuantity}
          onDecreaseQty={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        ></Cart>
        <div style={{fontSize:30, padding:10}}>
          Total: {this.getCartTotal()}
        </div>
    </div>
);
  }
}

export default App;
