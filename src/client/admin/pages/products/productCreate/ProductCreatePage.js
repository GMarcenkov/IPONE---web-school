import React from "react";
import PropTypes from "prop-types";
import SideBar from "../../../modules/layout/SideBar/SideBar";
import ProductCreateContainer from "../../../modules/gradess/productCreate/ProductCreateContainer";

const ProductCreatePage = props => {
  return (
    <div>
      <SideBar />
      <ProductCreateContainer />
    </div>
  );
};

ProductCreatePage.propTypes = {};

export default ProductCreatePage;
