import express from 'express';

import {
    regUserFin
} from '../controllers/userFinController.js'

const router = express.Router();

// register the finance info os user :- 
router.post("/regUserFin/:id", regUserFin)

export default router;