import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <>
            <nav>Get Set Go!</nav>
            
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/user/Bhavya">User</Link>
            </div>
        </>
    );
};

export default Header;
