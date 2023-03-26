import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <h6>Price: ${price}</h6>
                <h6>Manufacturer: {seller}</h6>
                <h6>Rating: {ratings} star</h6>
            </div>
            <button className='btn-cart'>Add to Cart</button>

        </div>
    );
};

export default Product;