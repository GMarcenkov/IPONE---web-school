import React, { useContext } from "react";
import NavBar from "../../modules/layout/navBar/NavBar";
import Cart from "../../modules/cart/Cart";

const CartPage = props => {
  return (
    <div>
      <NavBar />
      <Cart />
    </div>
  );
};

CartPage.propTypes = {};

export default CartPage;
