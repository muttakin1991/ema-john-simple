import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';
const HEADER = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">shop</a>
                <a href="/review">order Now</a>
                <a href="/manage">manage Inventory</a>
            </nav>
        </div>
    );
};

export default HEADER;