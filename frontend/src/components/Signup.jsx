// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios'
// export const Signup = () => {
//     const [username, setUsername] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         axios.post('http://localhost:5001/auth/signup', {
//             // your data here
//         })
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error!', error);
//             });
//     }
//     return (
//         <div className='signup-container'>
//             <h2>Sign Up</h2>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Username</Form.Label>
//                     <Form.Control type="text" placeholder="Enter User Name" onChange={(e) => setUsername(e.target.value)} />
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
//                     <Form.Text className="text-muted">
//                         We'll never share your email with anyone else.
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="Check me out" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit" id='btn'>
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     )
// }

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5001/auth/signup', {
            username,
            email,
            password
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </Form>
    );
};


export default Signup