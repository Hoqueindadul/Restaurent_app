import express from 'express'
import bcrypt from 'bcrypt'
const router = express.Router()
import { User } from '../models/User.js'

router.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    // Logic to handle user signup
    console.log(`Signup request received with username: ${username}, email: ${email}`);

    res.send('Signup successful');
});

export { router as UserRouter };


