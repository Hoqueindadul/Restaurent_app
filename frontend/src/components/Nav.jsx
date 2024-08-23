import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from 'react-bootstrap/Button';

const Nav = () => {
    const { loggedInUsername, logout } = useAuth();

    return (
        <div>
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg sticky-top spacer navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0" id='holearea'>
                    <Link to="/" className="navbar-brand p-0">
                        <img src="/logo.png" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 pe-4">
                            <Link to="/home" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/service" className="nav-item nav-link">Service</Link>
                            <Link to="/menu" className="nav-item nav-link">Menu</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        
                        {loggedInUsername ? (
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    {loggedInUsername}
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <button 
                                            className="dropdown-item"
                                            onClick={logout}
                                            
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/signup" className="btn btn-primary py-2 px-4">Sign Up</Link>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Nav