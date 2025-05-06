import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import  EclipsePoolLogo  from "./../images/newllogo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-left">
                    <button
                        className={`navbar-toggle ${isOpen ? '' : 'collapsed'}`}
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                    >
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                    </button>
                </div>

                {/* Top-right corner logo (desktop only) */}


                <div className={`navbar-collapse ${isOpen ? 'in' : 'collapse'}`}>
                    {/* Mobile-first logo (only shows when open) */}
                    {isOpen && (
                   ''
                    )}

                    <ul className="nav navbar-nav navbar-nav-first">
                        <EclipsePoolLogo />
                        <li><a href="#home" className="smoothScroll">Home</a></li>
                        <li><a href="#about" className="smoothScroll">About</a></li>
                        <li><a href="#services" className="smoothScroll">Services</a></li>
                        <li><a href="#work" className="smoothScroll">Project Gallery</a></li>
                        <li><a href="#contact" className="smoothScroll">Contact</a></li>
                        <li><Link to="/signin">Login</Link></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a
                                href="https://www.facebook.com/p/Eclipse-Pool-Service-100063504253328/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-facebook-square" style={{ fontSize: '24px' }}></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
