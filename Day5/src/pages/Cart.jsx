
import React from 'react';
import '../assets/css/Cart.css';
const Cart = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.persons, 0);

    return (
        <div className='cart-container'>
            <h2>Cart Items</h2>
            <div className='cart-items'>
                {cartItems.map(item => (
                    <div key={item.id} className='cart-item'>
                        <h3>{item.name}</h3>
                        <p>Price: {item.price}</p>
                        <p>Number of Persons: {item.persons}</p>
                        <hr />
                    </div>
                ))}
            </div>
            <div className='cart-summary'>
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                <button className='btn-cash'>Cash On Delivery</button>
            </div>
        </div>
    );
};

export default Cart;
