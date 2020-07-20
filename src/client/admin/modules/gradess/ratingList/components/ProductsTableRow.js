import React from "react";
import ProductTableRow from "./shared/productsTableRow/ProductTableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductsTableRow = ({ product, deleteProduct }) => {
  return (
    <ProductTableRow>
      <td className="product_title">{product.title}</td>
      <td className="sku">{product.sku}</td>
      <td className="price">
        {product.discount_price === undefined ||
        product.price < product.discount_price
          ? (product.price / 100).toFixed(2)
          : (product.discount_price / 100).toFixed(2)}
        {" лв."}
      </td>
      <td className="weight">
        {(product.weight / 1000).toFixed(3)}
        {" кг."}
      </td>
      <td className="quantity">{product.quantity}</td>
      <td className="product_action">
        <FontAwesomeIcon
          className="delete_user"
          icon={faTrash}
          onClick={() => deleteProduct(product._id)}
        />

        <Link
          to={`/admincp/product/edit/${product._id}`}
          style={{ textDecoration: "none" }}
        >
          {" "}
          <FontAwesomeIcon className="edit_user" icon={faEdit} />
        </Link>
      </td>
    </ProductTableRow>
  );
};

ProductsTableRow.propTypes = {};

export default ProductsTableRow;
