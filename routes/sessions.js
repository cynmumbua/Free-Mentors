const express = require('express');
const router = express.Router();
const sessions= require('../models/sessions');
const Middleware= require('../middleware/middleware');
const mentorsInfo= require('../models/mentorsInfo');
const Joi= require('joi');
const reviews = require('../models/reviews');


router.post('/', Middleware.checkUserToken, (request, response)=>{
	const{error}= validateQuestion(request.body);
	if(error){
		return response.status(409).json({
			message: error.details[0].message
		});
	}

	const checkMentor= mentorsInfo.find(mentorsInfo=>mentorsInfo.userId == request.body.mentorId);
	if(request.user.mentor == false){
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
	}else{
			 response.status(409).json({
	    	 status: 409,
	    	 message: 'Mentor cannot create sessions'
	    });
	}

});

router.get('/',Middleware.checkUserToken, (request, response)=>{
	const userId =request.user.userId;
	if(request.user.mentor == false){
		const menteeSessions = sessions.filter(sessions=>sessions.menteeId == userId);
		response.status(200).json({
    	status: 200,
    	data: menteeSessions
	});
	}else if(request.user.mentor == true){
		const mentorSessions = sessions.filter(sessions=>sessions.mentorId == userId);
		response.status(200).json({
    	status: 200,
    	data: mentorSessions
	});

	}
	else{
		response.status(401).json({
			message: 'Unauthorised access'
		});
	}
	
});

router.patch('/:sessionId/accept',Middleware.checkUserToken, (request, response)=>{
	const userId =request.user.userId;
	if(request.user.mentor == true){
			const acceptSession = sessions.find(sessions=>sessions.sessionId == request.params.sessionId);
			if(acceptSession){
				acceptSession.status = 'accepted';
				response.status(200).json({
		    	status: 200,
		    	data: acceptSession
			});	
			}else{
				response.status(404).json({
					message: 'session not found'
				});
			}	
	}else{
		response.status(401).json({
		message: 'Unauthorised access'
	});
	}
});

router.patch('/:sessionId/reject',Middleware.checkUserToken, (request, response)=>{
	const userId =request.user.userId;
	if(request.user.mentor == true){
			const rejectSession = sessions.find(sessions=>sessions.sessionId == request.params.sessionId);
			if(rejectSession){
				rejectSession.status = 'rejected';
				response.status(200).json({
		    	status: 200,
		    	data: rejectSession
			});	
			}else{
				response.status(404).json({
					message: 'session not found'
				});
			}	
	}else{
		response.status(401).json({
		message: 'Unauthorised access'
	});
	}
});

router.post('/:sessionId/review', Middleware.checkUserToken, (request, response)=>{
	const requestedSession = sessions.find(sessions=>sessions.sessionId == request.params.sessionId);
	if(requestedSession){
		if(requestedSession.menteeId == request.user.userId){
			 if(requestedSession.status !== 'accepted'){
			 	return response.status(403).json({
			 		message: 'session has not been accepted'
			 	});
			 }

			const review = {
				sessionId: requestedSession.sessionId,
				mentorId: requestedSession.mentorId,
				menteeId: requestedSession.menteeId,
				score: request.body.score,
				menteeFullName: `${request.user.firstName} ${request.user.lastName}`,
				remark: request.body.remark
			};
			reviews.push(review);
			response.status(200).json({
				status:200,
				data: review
			});
		}else{
			response.status(409).json({
				message: 'confirm your session Id'
			});
			
		}
	}else{
		response.status(404).json({
				message: 'session with that id not found'
			});
	}

});

router.delete('/:sessionId/delete', Middleware.checkUserToken, (request, response)=>{
	if(request.user.mentor == 'admin'){
		const deleteReview = reviews.find(reviews=>reviews.sessionId == request.params.sessionId);
		if(deleteReview){
			reviews.splice(reviews.indexOf(deleteReview), 1);
			response.status(200).json({
			status: 200,
			message: 'Review successfully deleted'
			});
		}else{
			response.status(404).json({
				message: 'review with that id not found'
			});
		}

	}
	else{
		response.status(401).json({
			message: 'Unauthorised access'
		});
	}
	
	
});

const validateQuestion =(formData)=> {
	schema = {
		mentorId:Joi.number().required(),
		questions: Joi.string().required().min(6)
	}
	return Joi.validate(formData, schema);
}
module.exports= router;