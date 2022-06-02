import React from "react";

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://cdn-icons.flaticon.com/png/512/2543/premium/2543369.png?token=exp=1654148511~hmac=89bdc54c60a16d027be74e466860a08e"
          alt="cart-icon"
        />
        <span style={styles.cartCount}>3</span>
      </div>
    </div>
  );
};

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 30,
  },
  nav: {
    height: 70,
    background: "red",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "transparent",
    borderRadius: "50%",
    border:'1px solid black',
    padding: "2px 6px",
    position: "absolute",
    right: 20,
    top: -15,
  },
};

export default Navbar;
