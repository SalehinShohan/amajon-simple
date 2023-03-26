import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <h6>Price: ${price}</h6>
                <h6>Manufacturer: {seller}</h6>
                <h6>Rating: {ratings} star</h6>
            </div>
            <button onClick={() =>handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart <FontAwesomeIcon icon= {faShoppingCart} />
                </button>

        </div>
    );
};

export default Product;