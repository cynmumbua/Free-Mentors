//import expres and router
import express from 'express';
const router = express.Router();
// import router from express.Router();
// import usersInfo from '../models/usersInfo';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt'
import authController from '../controllers/auth';
import Middleware from '../middleware/authV';
import checkUser from '../middleware/checkUser';
// import Joi from 'joi';


//signup route
router.post('/signup',Middleware.vSignup, checkUser.signup, authController.signup);

router.post('/signin',Middleware.vSignin, checkUser.signin, authController.signin);


export default router;