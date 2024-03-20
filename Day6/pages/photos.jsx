import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../assets/css/photos.css';
import s from '../assets/images/999.jpg';
import a from '../assets/images/8.jpg';
import f from '../assets/images/9.jpg';
import v from '../assets/images/10.jpg';
import u from '../assets/images/9999.jpg';
import d from '../assets/images/12.jpg';
import backSymbol from '../assets/images/14.jpg'; // Import the back symbol image

const Photos = () => {
    // Your existing code for products and state
    const products = [
        { id: 1, image: s },
        { id: 2, image: a },
        { id: 3,  image: f },
        { id: 4,image: v },
        { id: 5, image: u },
        { id: 6, image: d},
    ];

    const [productsData, setProductsData] = useState(products);

    return (
        <div className='pb'>
            {/* Back symbol button */}
            <Link to="/home" className='back-button'>
                <img src={backSymbol} alt='Back' />
            </Link>
            
            <div className='product-grid'>
                {productsData.map(product => (
                    <div key={product.id} className='product-itemz'>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                       
                        <div className='persons-container'>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Photos;
