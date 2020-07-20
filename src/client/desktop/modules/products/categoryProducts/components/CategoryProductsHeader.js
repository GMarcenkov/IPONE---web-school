import React from 'react';
import PropTypes from 'prop-types';
import './CategoryProducts.css'
const CategoryProductsHeader = ({category}) => {
    return (
        <div className="title_category">
            {console.log(category)}
            {
                category===''?"404":category.title
            }

        </div>
    );
};

CategoryProductsHeader.propTypes = {

};

export default CategoryProductsHeader;
