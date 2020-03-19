import React from 'react';
import { FaHeart } from "react-icons/fa";

const Footer = () =>{
    return (
        <div className='footer-container'>
            <p className='footer-text'>Hecho con <FaHeart /> por <a href='https://twitter.com/JebusDoodles'>Jesús Cortés</a>. Quédense en casa.</p>
        </div>
    );
};

export default Footer;
