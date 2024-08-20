import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Axios from 'axios';


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUsername, setLoggedInUsername] = useState(''); // State to store the logged-in username
    const [error, setError] = useState(''); // State to store error message
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');

        Axios.post('http://localhost:5001/auth/login', {
            username,
            password
        })
        .then(response => {
            console.log(response.data);

            if (response.data.status) {
                // Set the logged-in username
                setLoggedInUsername(username);
                
                // Show success popup
                setShowPopup(true);
                // Hide popup after 3 seconds
                setTimeout(() => setShowPopup(false), 3000);
                // navigate('/home');
            } else {
                setError(response.data.message || 'Login failed');
            }

            setUsername('');
            setPassword('');
        })
        .catch(error => {
            console.error('There was an error!', error);
            if (error.response) {
                setError(error.response.data.message || 'Server error');
            } else if (error.request) {
                setError('Network error. Please try again.');
            } else {
                setError('An error occurred. Please try again.');
            }
        });
    };

    return (
        <div className="container-xxl bg-white p-0">
            {/* Navbar */}
            <div className="container-xxl position-relative p-0" id='nab'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top px-4 px-lg-5 py-3 py-lg-0">
                    <Link to="/" className="navbar-brand p-0">
                        <img src="/logo.png" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 pe-4">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/service" className="nav-item nav-link active">Service</Link>
                            <Link to="/menu" className="nav-item nav-link">Menu</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        {loggedInUsername && <h1 className="text-white">Welcome, {loggedInUsername}!</h1>}
                        <Link to="/signup" className="btn btn-primary py-2 px-4">Sign Up</Link>
                    </div>
                </nav>
            </div>

            {/* Form structure */}
            <div className='form-container'>
                <Form id="frm" onSubmit={handleSubmit}>
                    <h2 className='heading'>Sign <span>In</span></h2>
                    <Form.Group controlId="formUsername" className='items'>
                        <Form.Label>Username/email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username or email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className='items'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" id='btn' className='singin'>
                        Log In
                    </Button>
                    <h3 className='exit'>Don't have an account? <Link to="/signup" className='link'>Sign up</Link></h3>
                </Form>
                {showPopup && (
                    <div className="popup">
                        Signup successful!
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
