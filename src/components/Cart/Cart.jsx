import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = ({ cart }) => {
    // const cart = props.cart; // option 1
    // const {cart} = props; //option 2

    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = total * 7 / 100;

    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <button className='btn-clear'>
                Clear Cart <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className='btn-review'>
                Review Order <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default Cart;