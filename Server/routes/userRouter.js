import { home, login, register } from "../controller/userController.js";
import express from 'express';
import { userAuth } from "../middlewares/auth.js";

const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/home',userAuth,home)


export default router;