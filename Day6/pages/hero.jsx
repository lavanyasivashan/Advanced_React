import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import '../assets/css/hero.css';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';

const Hero = () => {
    return (
      
        <div className='b'>  <Navbar/>
        <div className='hero'>
            <div className='content'>
                <h1>Welcome! </h1>
                <p className='search-text'>Your ultimate destination for thrilling water activities and unforgettable experiences! We are passionate about bringing the joy of water sports to everyone, from beginners to seasoned adventurers. </p>
                <Link to="/f"><butto type="submit">Book Now</butto></Link>
            </div>
        </div>
        </div>
    )
}

export default Hero