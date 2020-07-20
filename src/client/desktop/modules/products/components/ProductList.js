import React, { useContext } from "react";
import "./ProductContainer.css";
import { CartContext } from "../../../cartContext/CartContext";

const ProductList = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    let object = product;

    setCart(currentCart => [...currentCart, object]);
  };

  return (
    <div className="card">
      <img
        src={product.imageLink}
        alt="product"
        style={{ width: "100%", maxWidth: "300px", maxHeight: "400px" }}
      />{" "}
      <div style={{ minHeight: "100px","-webkit-box-orient": "vertical",
      "-webkit-line-clamp": "2", maxHeight: "100px" }}>
          <h1 >{product.title}</h1>
      </div>
      <p className={product.discount_price ? "old_price" : "price"}>
        {(product.price / 100).toFixed(2)}лв.
      </p>
      <p className="dis_price">
        {product.discount_price
          ? (product.discount_price / 100).toFixed(2) + "лв."
          : ""}
      </p>
      <p>Категория : {product.category}</p>
      <p>
        <button onClick={addToCart}>КУПИ СЕГА</button>
      </p>
    </div>
  );
};

export default ProductList;
