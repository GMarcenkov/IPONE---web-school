import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../modules/layout/navBar/NavBar";
import CategoryContainer from "../../modules/category/categories/CategoryContainer";
import "../../modules/layout/Wrapper/LayoutWrapper.css";
import ProductsContainer from "../../modules/products/ProductsContainer";
const HomePage = props => {
  return (
    <div>
      <NavBar />
      <div style={{ display: "flex" }}>
        <CategoryContainer />
        <ProductsContainer />
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
