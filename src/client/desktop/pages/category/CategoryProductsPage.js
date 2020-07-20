import React from 'react';
import PropTypes from 'prop-types';
import NavBar from "../../modules/layout/navBar/NavBar";
import CategoryProductsContainer from "../../modules/products/categoryProducts/CategoryProductsContainer";

const CategoryProductsPage = props => {
    return (
        <div>

            <NavBar />
            <div className="container_wrapper">
                <CategoryProductsContainer/>
            </div>
        </div>
    );
};

CategoryProductsPage.propTypes = {

};

export default CategoryProductsPage;
