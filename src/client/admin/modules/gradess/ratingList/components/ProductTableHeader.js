import React from "react";
import PropTypes from "prop-types";
import ProductTableHead from "./shared/productTableHead/ProductTableHead";

const ProductTableHeader = props => {
  return (
    <ProductTableHead>
      <tr>
        <th>Продукт</th>
        <th>SKU</th>
        <th>Цена</th>
        <th>Тегло</th>
        <th>Наличност</th>
        <th>Действия</th>
      </tr>
    </ProductTableHead>
  );
};

ProductTableHeader.propTypes = {};

export default ProductTableHeader;
