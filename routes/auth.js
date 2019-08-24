//import expres and router
const express = require('express');
const router = express.Router();
const usersInfo = require('../models/usersInfo');
const Joi= require('joi');
const jwt= require('jsonwebtoken');
const bcrypt = require('bcrypt');
//signup route
router.post('/signup', (request, response)=>{
const{error}= validateSignup(request.body);
const checkEmail= usersInfo.some(usersInfo=>usersInfo.email=== request.body.email);
const password=bcrypt.hashSync(request.body.password, 6);
//capture user details in an object
if(!checkEmail){
	if(!error){
		const user = {
			userId:usersInfo.length + 1,
			firstName: request.body.firstName,
			lastName: request.body.lastName,
			email: request.body.email,
			password: password,
			address: request.body.address,
			bio: request.body.bio,
			occupation: request.body.occupation,
			expertise: request.body.expertise
			}
			usersInfo.push(user);
	// generate validation token
			const token = jwt.sign({email: user.email}, 'key');

			response.status(201).json({
				status: 201,
				message: 'user created succesfully',
				data: {
					token: token,
					message: 'user created succesfully',
					firstName: user.firstName,
					email:user.email,
					password:user.password
				}
			});
	}else{
		return response.status(409).json({
			message: error.details[0].message
		});
		}
	}else{
		return response.status(409).json({
			message: 'That email is already in use'
		});
	}
});

// signin
router.post('/signin', (request, response)=>{
	const{error}= validateSignin(request.body);

	if (error){
		return response.status(409).json({
			message: error.details[0].message
		});
	}
	const checkUser= usersInfo.find(usersInfo=>usersInfo.email=== request.body.email);

	if(checkUser){
		const passwordCheck = bcrypt.compareSync(request.body.password, checkUser.password);
		if(passwordCheck){
			const token= jwt.sign({email: request.body.email}, 'key');
			response.status(200).json({
				status: 200,
				message: 'User is succesfully logged in',
				data:{
					token:token,
					email: request.body.email
				}
				

			});
		}else{
			return response.status(409).json({
				message: 'Password do not match'
			});
		}
	}else{
		return response.status(409).json({
			message: 'User not found'
		});
	}

});
// Joi function to validate registration
const validateSignup =(formData)=> {
	schema = {
		firstName: Joi.string().required().min(3),
		lastName: Joi.string().required().min(3),
		email: Joi.string().required().email(),
		password: Joi.string().required().min(6),
		address: Joi.string().required().min(3),
		bio: Joi.string().required(),
		occupation: Joi.string().required(),
		expertise: Joi.string().required()
	}
	return Joi.validate(formData, schema);
}
// Joi function to validate signin
const validateSignin =(formData)=> {
	schema = {
		email: Joi.string().required().email(),
		password: Joi.string().required()
	}
	return Joi.validate(formData, schema);
}

module.exports= router;