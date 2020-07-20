import React from 'react';
import PropTypes from 'prop-types';
import ProductsContainer from "../../modules/products/ProductsContainer";
import NavBar from "../../modules/layout/navBar/NavBar";

const BlogPage = props => {
    return (
        <div>
            <NavBar />
<ProductsContainer/>
        </div>
    );
};

BlogPage.propTypes = {

};

export default BlogPage;
