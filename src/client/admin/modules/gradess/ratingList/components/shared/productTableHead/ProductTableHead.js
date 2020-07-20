import React from 'react';
import './ProductTableHead.css'

const ProductTableHead = ({children}) => {
    return (
        <thead className="table_head">
            {children}
        </thead>
    );
};

ProductTableHead.propTypes = {

};

export default ProductTableHead;
