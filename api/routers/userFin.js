import express from 'express';

import {
    regUserFin,
    updateUserFin,
    deleteUserFin,
    getUserFin
} from '../controllers/userFinController.js'

const router = express.Router();

router.put("/:id", updateUserFin)

// register the finance info os user :- 
router.post("/:id", regUserFin)


router.delete("/:id", deleteUserFin)

router.get("/:id", getUserFin)

export default router;