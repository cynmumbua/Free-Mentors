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

router.post('/signin', (request, response)=>{

	response.send('This is my first app');
});

const validateSignup =(formData)=> {
	schema = {
		firstName: Joi.string().required(),
		lastName: Joi.string().required(),
		email: Joi.string().required().email(),
		password: Joi.string().required(),
		address: Joi.string().required(),
		bio: Joi.string().required(),
		occupation: Joi.string().required(),
		expertise: Joi.string().required()
	}
	return Joi.validate(formData, schema);
}

module.exports= router;