import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../assets/css/featured.css';
import s from '../assets/images/7.jpg';
import a from '../assets/images/8.jpg';
import f from '../assets/images/9.jpg';
import v from '../assets/images/10.jpg';
import u from '../assets/images/11.jpg';
import d from '../assets/images/12.jpg';
import backSymbol from '../assets/images/14.jpg'; // Import the back symbol image

const Featured = () => {
    // Your existing code for products and state
    const products = [
        { id: 1, name: 'Snorkeling', price: '$19.99', image: s, persons: 0 },
        { id: 2, name: 'Aquarium Visit', price: '$29.99', image: a, persons: 0 },
        { id: 3, name: 'Ferris Wheel', price: '$39.99', image: f, persons: 0 },
        { id: 4, name: 'Beach Volleyball', price: '$19.99', image: v, persons: 0 },
        { id: 5, name: 'Surfing', price: '$49.99', image: u, persons: 0 },
        { id: 6, name: 'Dolphin Visit', price: '$69.99', image: d, persons: 0 },
    ];

    // State for products data
    const [productsData, setProductsData] = useState(products);

    const handleIncrement = (productId) => {
        setProductsData(prevData =>
            prevData.map(product =>
                product.id === productId
                    ? { ...product, persons: product.persons + 1 }
                    : product
            )
        );
    };

    const handleDecrement = (productId) => {
        setProductsData(prevData =>
            prevData.map(product =>
                product.id === productId && product.persons > 0
                    ? { ...product, persons: product.persons - 1 }
                    : product
            )
        );
    };

    return (
        <div className='bb'>
            {/* Back symbol button */}
            <Link to="/home" className='back-button'>
                <img src={backSymbol} alt='Back' />
            </Link>

            <div className='product-grid'>
                {productsData.map(product => (
                    <div key={product.id} className='product-item'>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: {product.price}</p>
                        <div className='persons-container'>
                            <span>Number of Persons:</span>
                            <div className='person-input'>
                                <button className='btn-minuss' onClick={() => handleDecrement(product.id)}>-</button>
                                <span>{product.persons}</span>
                                <button className='btn-pluss' onClick={() => handleIncrement(product.id)}>+</button> 
                            </div>
                            <button className='btn-books'>Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;
