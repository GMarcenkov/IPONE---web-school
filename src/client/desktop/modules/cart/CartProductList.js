import React from 'react';
import PropTypes from 'prop-types';

const CartProductList = ({product,cart}) => {
    let count =cart.filter(item=>item._id===product._id)
    return (
        <div style={{"display":"flex","margin-top":"20px","border-bottom": "1px solid #dfdfdf"}}>
            <div style={{"margin-left":"20px"}}>
                <img style={{"max-width":"100px"}} src={product.imageLink}/>
            </div>
            <div style={{"margin-left":"20px"}}>{product.title}</div>
            <div style={{"margin-left":"20px"}}>{product.price/100}лв</div>
           <div style={{"margin-left":"20px"}}>{count.length}бр.

           </div>
        </div>
    );
};

CartProductList.propTypes = {

};

export default CartProductList;
