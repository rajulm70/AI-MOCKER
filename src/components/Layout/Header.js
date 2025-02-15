import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const Header = () => {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

    const handleLogout = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to logout?")) {
            setAuth({
                ...auth,
                user: null,
                token: "",
            });
            localStorage.removeItem("auth");
            toast.success("Logout Successfully");
            navigate("/login");
        }
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    };

    return (
        <>
            <style>
                {`
                    .sticky-header {
                        position: sticky;
                        top: 0;
                        z-index: 1000;
                        width: 100%;
                        box-shadow: 0 3px 18px -1px gray;
                    }

                    .navbar {
                        background: linear-gradient(45deg, #ae63b3, #b2f78f);
                    }

                    /* Remove background color for the logo */
                    .navbar-brand {
                        color: black ;
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                        background-color: transparent !important; /* Make the background transparent */
                    }

                    /* Modern Hamburger Icon */
                    .navbar-toggler {
                        border: none ;
                        background: transparent !important;
                        outline: none;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        width: 30px;
                        height: 25px;
                        padding: 0;
                    }

                    .navbar-toggler .bar {
                        width: 30px;
                        height: 4px;
                        background-color: black;
                        border-radius: 5px;
                        transition: all 0.3s ease;
                    }

                    .navbar-toggler.open .bar:nth-child(1) {
                        transform: rotate(45deg) translate(5px, 5px);
                    }

                    .navbar-toggler.open .bar:nth-child(2) {
                        opacity: 0;
                    }

                    .navbar-toggler.open .bar:nth-child(3) {
                        transform: rotate(-45deg) translate(5px, -5px);
                    }

                    .nav-link {
                        color: black !important;
                    }

                    .dropdown-menu {
                        background-color: #3f1f45;
                    }

                    .dropdown-item {
                        color: white;
                    }

                    .dropdown-item:hover {
                        background-color: #a4e7d1;
                    }

                    .icon-user {
                        margin-right: 5px;
                    }

                    .navbar-nav .nav-link {
                        color: black !important;
                    }

                    /* Custom CSS to remove the active link styling */
                    .disable-active.active {
                        text-decoration: none; /* Remove underline */
                        border: none; /* Remove any borders */
                    }

                    /* Mobile specific CSS for better navigation */
                    @media (max-width: 768px) {

                        .nav-item {
                            margin-bottom: 10px;
                        }

                        .navbar-nav .nav-link {
                            color: black !important;
                            text-align: center;
                        }
                    }
                `}
            </style>

            <nav className="navbar navbar-expand-lg sticky-header">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src='https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-artificial-intelligence-brain-graphic-element-png-image_11720064.png'
                            alt="logo"
                            style={{ width: '30px', height: '30px', marginRight: '8px' }}
                        />
                        AI-Mocker
                    </Link>
                    <button
                        className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`}
                        type="button"
                        onClick={handleMenuToggle} // Toggle the menu when clicked
                        aria-controls="navbarSupportedContent"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} // Apply "show" class based on menu state
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category" className="nav-link">Category</NavLink>
                            </li>
                            {!auth?.user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/register" className="nav-link">
                                            Register
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link">
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle disable-active"
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            isActive={() => false}>
                                            <i className="fa-solid fa-user-tie icon-user"></i>
                                            {auth?.user?.name}
                                        </NavLink>
                                        <div className="dropdown-menu dropdownStyle" aria-labelledby="navbarDropdown">
                                            <li>
                                                <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="dropdown-item dropdownStyle1">Dashboard</NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    onClick={handleLogout}
                                                    to="/login"
                                                    className="dropdown-item dropdownStyle1"
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </div>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
