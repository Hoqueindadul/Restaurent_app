import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Nav from './Nav';

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
    const navigate = useNavigate()
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
                // if(response.data.status){
                //     navigate('/login')
                // }
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
            <Nav />
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
                    <h3 className='exit'>Already have an account? <Link to="/login" className='link'>Sign in</Link></h3>
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