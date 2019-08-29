const express = require('express');
const router = express.Router();
const Middleware = require('../middleware/middleware');
const mentorsInfo=require('../models/mentorsInfo');

router.get('/',Middleware.checkUserToken, (request, response)=>{

	response.status(200).json({
		status: 200,
		data:mentorsInfo
	});
});

router.get('/:mentorId',Middleware.checkUserToken, (request, response)=>{
	const checkMentor= mentorsInfo.find(mentorsInfo=>mentorsInfo.userId == request.params.mentorId);
	if(checkMentor){
		response.status(200).json({
		status: 200,
		data:checkMentor
	});
	}else{
		response.status(404).json({
			message: 'Mentor not found'
		});
	}
});


module.exports= router;