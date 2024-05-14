import express from "express";
import { login, logout, signup, getCurrentUser } from "../controllers/auth.controller.js";
import protectRoute from '../middleware/protectRoute.js'
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get('/currentuser',protectRoute,getCurrentUser)

export default router;
