import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // const [showSearch, setShowSearch] = useState(false);
    const [cartItems] = useState(3);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm px-2 px-lg-5">
            <div className="container-fluid p-0">
                {/* Left Section - Logo & Brand */}
                <Link className="navbar-brand me-3" to="/">
                    <i className="bi bi-film text-primary me-2"></i>
                    <span className="d-none d-sm-inline">CINEMATE</span>
                </Link>

                {/* Mobile Toggle Button - Only shows on small screens */}
                <button
                    className="navbar-toggler d-lg-none border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mobileNavContent"
                    aria-controls="mobileNavContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="bi bi-list"></i>
                </button>

                {/* Desktop Content - Shows on large screens */}
                <div className="d-none d-lg-flex w-100">
                    {/* Left-aligned Navigation */}
                    <ul className="navbar-nav me-auto">
                        <NavItem icon="bi-house" text="Home" to="/" />
                        <NavItem icon="bi-film" text="Movies" to="/movies" />
                        <NavItem icon="bi-tv" text="TV Shows" to="/tv" />
                    </ul>

                    {/* Right-aligned Icons */}
                    <div className="d-flex align-items-center gap-4">
                        {/* Search */}
                        <div className="input-group" style={{ maxWidth: '500px' }}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search movies..."
                            />
                            <button className="btn btn-outline-secondary" type="button">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>

                        {/* Cart */}
                        <Link className="nav-link position-relative mx-2" to="/cart">
                            <i className="bi bi-cart3 fs-5"></i>
                            {cartItems > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartItems}
                                </span>
                            )}
                        </Link>

                        {/* User Dropdown */}
                        <div className="dropdown">
                            <button
                                className="btn btn-link nav-link dropdown-toggle d-flex align-items-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-person-circle fs-4"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end p-2">
                                <li><Link className="dropdown-item rounded" to="/login"><i className="bi bi-box-arrow-in-right me-2"></i>Login</Link></li>
                                <li><Link className="dropdown-item rounded" to="/register"><i className="bi bi-person-plus me-2"></i>Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mobile Content - Only shows when toggled on small screens */}
                <div className="collapse navbar-collapse d-lg-none" id="mobileNavContent">
                    <div className="navbar-nav">
                        <MobileNavItem icon="bi-house" text="Home" to="/" />
                        <MobileNavItem icon="bi-film" text="Movies" to="/movies" />
                        <MobileNavItem icon="bi-tv" text="TV Shows" to="/tv" />

                        {/* Mobile Search */}
                        <div className="px-3 py-2">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search movies..."
                                />
                                <button className="btn btn-primary" type="button">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>

                        {/* Mobile User Options */}
                        <div className="nav-item py-2">
                            <Link className="nav-link d-flex align-items-center" to="/login">
                                <i className="bi bi-box-arrow-in-right me-3 fs-5"></i>
                                Login
                            </Link>
                        </div>
                        <div className="nav-item py-2">
                            <Link className="nav-link d-flex align-items-center" to="/register">
                                <i className="bi bi-person-plus me-3 fs-5"></i>
                                Register
                            </Link>
                        </div>
                        <div className="nav-item py-2">
                            <Link className="nav-link d-flex align-items-center position-relative" to="/cart">
                                <i className="bi bi-cart3 me-3 fs-5"></i>
                                Cart
                                {cartItems > 0 && (
                                    <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger ms-1">
                                        {cartItems}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Reusable Components
const NavItem = ({ icon, text, to }) => (
    <li className="nav-item">
        <Link className="nav-link" to={to}>
            <i className={`bi ${icon} me-1`}></i>
            {text}
        </Link>
    </li>
);

const MobileNavItem = ({ icon, text, to }) => (
    <div className="nav-item py-2">
        <Link className="nav-link d-flex align-items-center" to={to}>
            <i className={`bi ${icon} me-3 fs-5`}></i>
            {text}
        </Link>
    </div>
);

export default Header;