// import express from 'express'
// import bcrypt from 'bcrypt'
// const router = express.Router()
// import { User } from '../models/User.js'

// router.post('/signup', (req, res) => {
//     const { username, email, password } = req.body;

//     // Logic to handle user signup
//     console.log(`Signup request received with username: ${username}, email: ${email}`);

//     res.send('Signup successful');
// });

// export { router as UserRouter };


import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send('All fields are required');
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).send('Signup successful');
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).send('Internal server error');
    }
});

export { router as UserRouter };
