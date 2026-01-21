import {Router} from 'express';
import {loginUser, registerUser, logoutUser} from '../controllers/user.controller.js';

const router=Router();
router.route('/register').post(registerUser); // This line defines a POST route for user registration
router.route('/login').post(loginUser); // This line defines a POST route for user login
router.route('/logout').post(logoutUser);

export default router;
