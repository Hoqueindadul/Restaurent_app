import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useAuth } from '../context/AuthContext'; // Ensure this path is correct
import Nav from './Nav';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const { loggedInUsername, login, logout } = useAuth(); // Destructure login from useAuth

    Axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');

        Axios.post('http://localhost:5001/auth/login', { username, password })
            .then(response => {
                if (response.data.status) {
                    login(username); // Update the logged-in username in context
                    setShowPopup(true);
                    setTimeout(() => {
                        setShowPopup(false);
                        navigate('/home');
                    }, 3000);
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

            <Nav />
            {loggedInUsername ? (
                <DropdownButton id="dropdown-basic-button" title={loggedInUsername} className="ms-2">
                    <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                        logout();
                        navigate('/login');
                    }}>Logout</Dropdown.Item>
                </DropdownButton>
            ) : (
                <Link to="/signup" className="btn btn-primary py-2 px-4">Sign Up</Link>
            )}



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
                    {error && <p className="text-danger mt-2">{error}</p>}
                    <h3 className='exit'>Don't have an account? <Link to="/signup" className='link'>Sign up</Link></h3>
                </Form>
                {showPopup && (
                    <div className="popup">
                        Login successful!
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
