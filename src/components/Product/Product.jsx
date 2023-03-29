import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props)
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
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;
