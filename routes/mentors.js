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


module.exports= router;