import React from 'react';
import './Product.css';

const Product = (props) => {
    const handleAddToCart = props.handleAddToCart
    const { img, name, seller, ratings, quantity, price } = props.product
    return (
        <div className='product'>
            <img src={img ? img : 'No Pic Found'} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p className='product-manufacturer'>Manufacturer: {seller}</p>
                <p>Rate: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;
