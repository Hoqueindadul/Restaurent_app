import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; 

export const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5001/auth/signup', {
            username,
            email,
            password
        })
            .then(response => {
                console.log(response.data);
                setUsername('');
                setEmail('');
                setPassword('');

                // Show success popup
                setShowPopup(true);
                // Hide popup after 3 seconds
                setTimeout(() => setShowPopup(false), 3000);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div className="container-xxl bg-white p-0">
            {/* Navbar */}
            <div className="container-xxl position-relative p-0 " id='nab'>
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
                        <a href="" className="btn btn-primary py-2 px-4">Sign Up</a>
                    </div>
                </nav>
            </div>

            {/* Form structure */}
            <div className='form-container'>
                <Form id="frm" onSubmit={handleSubmit}>
                    <h2 className='heading'>Sign <span>Up</span></h2>
                    <Form.Group controlId="formUsername" className='items'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className='items'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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

                    <Button variant="primary" type="submit" id='btn'>
                        Sign Up
                    </Button>
                    <h3>Already a user? <Link to="/login">login</Link></h3>
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


export default Signup