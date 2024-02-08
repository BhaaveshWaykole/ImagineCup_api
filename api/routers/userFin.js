import express from 'express';

import {
    updateUserFin,
    deleteUserFin,
    getUserFin,
    regUserFin
} from '../controllers/userGenController.js'

const router = express.Router();

