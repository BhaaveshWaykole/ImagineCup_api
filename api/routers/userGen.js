import express from 'express';

import {
    updateUser,
    deleteUser,
    getUser
} from '../controllers/userGenController.js'

const router = express.Router();

// Update:- 
router.put('/:id', updateUser);

// Delete :-
router.delete('/:id', deleteUser);

// Get a user :-
router.get('/', getUser) //removed /:id

// router.get('/:id', getUser)

export default router

