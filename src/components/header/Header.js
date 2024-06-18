// import React from "react";
// import { Routes, Route } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/Logo.png';

const Header = () => {
    return (
       <header className="header">
            <img src={logo} alt="Ethaniel Snow Logo" id='navLogo'></img>
            <nav>
                <div className='navButton' id='navGallery'>Gallery</div>
                <div className='navButton' id='navAbout'>About</div>
                <div className='navButton' id='navCV'>CV</div>
                <div className='navButton' id='navContact'>Contact</div>
            </nav>
       </header>
    );
};

export default Header;