import express from "express";

const router = express.Router()

// Controllers
import {authUser} from "../controllers/userController.js";

import {protect,admin} from "../middleware/authMiddleware.js";

router
    .route('/login')
    .post(authUser)