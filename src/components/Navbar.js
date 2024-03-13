import React, { useState } from 'react';
import logo from '../images/niphal.png';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    const handleClick = () => {
        setToggleNavbar(prev => !prev);
    }

    return (
        <header id="header" class="header fixed-top">
            <div class="container d-flex align-items-center justify-content-between">
            <NavLink to="https://niphal.com.ng/index.html" class="logo"><img src={logo} alt="" class="img-fluid" width={60} /></NavLink>

            <nav id="navbar" class="navbar">
                <ul className={toggleNavbar ? 'show' : ''}>
                    <li><NavLink class="nav-link scrollto" to="https://niphal.com.ng/index.html">Home</NavLink></li>
                    <li><NavLink class="nav-link active" to="https://niphal.com.ng/about.html">About</NavLink></li>
                    <li><NavLink class="nav-link scrollto" to="https://niphal.com.ng/index.html#team">Team</NavLink></li>
                    <li><NavLink class="nav-link scrollto" to="https://niphal.com.ng/index.html#contact">Contact</NavLink></li>
                    <li><NavLink class="nav-link" to="https://niphal.com.ng/klacify.html">Klacify</NavLink></li>
                    <li><NavLink class="nav-link" to="https://niphal-blog.vercel.app">Blog</NavLink></li>
                    <li><NavLink class="getstarted" to="https://niphal.com.ng/index.html#contact">Get Started</NavLink></li>
                </ul>
                <div className="menu-bar" onClick={handleClick}>
                    <FaBars />
                </div>
            </nav>

            </div>
        </header>
    );
}

export default Navbar;