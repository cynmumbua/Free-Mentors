
import express from 'express';
const router = express.Router();
import Middleware from '../middleware/authV';
import checkUser from '../middleware/checkUser';
import dotenv from 'dotenv';
import authController  from '../controllers/auth';



//signup route
router.post('/signup',Middleware.vSignup, checkUser.signup, authController.signup);

router.post('/signin',Middleware.vSignin, checkUser.signin, authController.signin);


export default router;
