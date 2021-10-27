import React from 'react';
import reactLogo from '../images/512px-React-icon.svg.png';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <p>Weather App in </p>
            <div className="img"><img src={reactLogo} alt="logoReact" className="move" /></div>
        </header>
    );
}

export default Header;