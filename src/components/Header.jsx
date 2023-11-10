// Header.js
import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <img src="/logo.jpg" alt="Logo" className="logo" />
            <div className="slogan">
                <span>We do <span className="it">it</span> with passion</span>

            </div>
        </div>
    );
}

export default Header;
