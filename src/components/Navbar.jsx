import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Landing.css'; // Has the navbar styles

const Navbar = () => {
    const { totalItems } = useCart();
    const [theme, setTheme] = useState(localStorage.getItem('echidna-theme') || 'light');
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('echidna-theme', theme);
    }, [theme]);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className={`navbar${menuOpen ? ' menu-open' : ''}`}>
            <div className="nav-left">
                <Link to="/" className="nav-link nav-brand">
                    Echidna.in
                </Link>
            </div>

            {/* Hamburger button — visible only on mobile via CSS */}
            <button
                className="nav-hamburger"
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Toggle menu"
            >
                <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
                <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
                <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
            </button>

            <div className={`nav-right${menuOpen ? ' nav-right-open' : ''}`}>
                <Link to="/" className="nav-btn" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/products" className="nav-btn" onClick={() => setMenuOpen(false)}>Products</Link>
                <Link to="/customize/1" className="nav-btn" onClick={() => setMenuOpen(false)}>Custom Orders</Link>
                <button onClick={toggleTheme} className="nav-btn nav-theme-btn">
                    {theme === 'light' ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    )}
                </button>
                <Link to="/checkout" className="nav-btn nav-cart-btn" onClick={() => setMenuOpen(false)}>
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                        <path d="M1 1h2.5l1.8 9h9l1.7-6H5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="8" cy="15.5" r="1.2" fill="currentColor" />
                        <circle cx="13" cy="15.5" r="1.2" fill="currentColor" />
                    </svg>
                    Cart {totalItems > 0 && <span>({totalItems})</span>}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
