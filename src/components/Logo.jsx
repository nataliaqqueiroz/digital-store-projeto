import React from 'react';
import logo from '../assets/logo-header.svg';
import './Header.css';

const Logo = () => {
    return ( 
        <>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        </>
     );
}
 
export default Logo;