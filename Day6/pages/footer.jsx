import React from 'react';
import backSymbol from '../assets/images/14.jpg'; 
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
    <div className='w-full bg-white-900 text-white py-16'><Link to="/home" className='back-button'>
    <img src={backSymbol} alt='Back' />
</Link>
      <div className='max-w-[500px] mx-auto flex flex-col lg:flex-row justify-between px-4'>
        
        <div className='flex flex-col mb-8 lg:mb-0'>
          <h2 className='text-2xl font-bold mb-4'>Follow Us</h2><br/>
          <div className='flex space-x-4'>
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='text-white text-xl hover:text-gray-400' />
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
              <FaTwitter className='text-white text-xl hover:text-gray-400' />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='text-white text-xl hover:text-gray-400' />
            </a>
            <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
              <FaYoutube className='text-white text-xl hover:text-gray-400' />
            </a><br/><br/>
          </div>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-bold mb-4'>Quick Links</h2>
          <ul className='space-y-1'>
            <li><a href='/home'>About</a></li>
            <li><a href='/featured'>Rides</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/photo'>Photo Gallery</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </div>
      </div><br/>
      <div className='border-t border-gray-800 mt-8 pt-4 text-center'>
        <p>&copy; {new Date().getFullYear()} Theme Park. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
