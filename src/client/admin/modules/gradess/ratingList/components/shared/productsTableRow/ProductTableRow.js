import React from 'react';
import './ProductTRow.css'

const ProductTableRow = ({children}) => {
    return (
        <tr>
            {children}
        </tr>
    );
};

ProductTableRow.propTypes = {

};

export default ProductTableRow;
