const express = require('express');
const router = express.Router();
const sessions= require('../models/sessions');
const Middleware= require('../middleware/middleware');
const mentorsInfo= require('../models/mentorsInfo');
const Joi= require('joi');


router.post('/', Middleware.checkUserToken, (request, response)=>{
	const{error}= validateQuestion(request.body);
	if(error){
		return response.status(409).json({
			message: error.details[0].message
		});
	}

	const checkMentor= mentorsInfo.find(mentorsInfo=>mentorsInfo.userId == request.body.mentorId);

	if(checkMentor){
		
		const newSession ={
			sessionId: sessions.length + 1,
			mentorId: request.body.mentorId,
			menteeId: request.user.userId,
			questions: request.body.questions,
			menteeEmail: request.user.email,
			status: 'pending'
		}
    sessions.push(newSession);
    response.status(201).json({
    	status: 201,
    	data: newSession
    });
	}else{
		 response.status(404).json({
    	 status: 404,
    	 message: 'No mentor with that Id'
    });
	}

});

router.get('/', (request, response)=>{

	
});

router.patch('/:sessionId/accept', (request, response)=>{

	response.send('This is my first app');
});

router.patch('/:sessionId/reject', (request, response)=>{

	response.send('This is my first app');
});

router.post('/:sessionId/review', (request, response)=>{

	response.send('This is my first app');
});

router.delete('/:sessionId/delete', (request, response)=>{

	response.send('This is my first app');
});

const validateQuestion =(formData)=> {
	schema = {
		mentorId:Joi.number().required(),
		questions: Joi.string().required().min(6)
	}
	return Joi.validate(formData, schema);
}
module.exports= router;