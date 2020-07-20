import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../cartContext/CartContext";
import ProductList from "../products/components/ProductList";
import CartProductList from "./CartProductList";

const Cart = props => {
  const { cart, setCart } = useContext(CartContext);
  let products = [];
  products = cart.filter((item, index) => cart.indexOf(item) === index);
  let allPrice = 0;
  cart.map(item => {
    allPrice += item.price;
  });

  const MakeOrder = () => {
    setCart([]);
  };

  return (
    <div style={{ margin: "auto", "max-width": "600px" }}>
      {cart.length === 0 ? (
        <div>Няма продукти във вашата количка</div>
      ) : (
        <div style={{ "margin-top": "100px" }}>
          {products.map(product => (
            <CartProductList product={product} cart={cart} />
          ))}
        </div>
      )}
      <div>Общо: {allPrice / 100} лв.</div>
      <button
        onClick={MakeOrder}
        style={{ backgroundColor: "#008CBA", color: "white" }}
      >
        Купи
      </button>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
