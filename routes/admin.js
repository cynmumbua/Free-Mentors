
const express = require('express');
const router = express.Router();
const usersInfo= require('../models/usersInfo');
const mentorsInfo=require('../models/usersInfo');
const Middleware=require('../middleware/middleware');

router.patch('/:userId', Middleware.checkUserToken, (request, response)=>{

	if(request.user.mentor == 'admin'){
			const upgradeUser = usersInfo.find(usersInfo=>usersInfo.userId == request.params.userId);
			if(upgradeUser){
				upgradeUser.mentor = true;
				response.status(200).json({
		    	status: 200,
		    	data: upgradeUser
			});	
			}else{
				response.status(404).json({
					message: 'user not found'
				});
			}	
	}else{
		response.status(401).json({
		message: 'Unauthorised access'
	});
	}
});

module.exports = router;