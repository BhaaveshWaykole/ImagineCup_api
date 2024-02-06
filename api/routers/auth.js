// Used for auth of user i.e to REGISTER or LOGIN a user
import express from 'express';

import {
    registerUser,
    loginUser
} from "../controllers/authController.js"

const router = express.Router();

// router.get('/', async (req, res) => {
//     res.send("Hello")
// })

// register user :- 
router.post('/register', registerUser)

// Login user :-
router.post('/login', loginUser)

export default router