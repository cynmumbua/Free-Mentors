const express = require('express');
const router = express.Router();

router.get('/', (request, response)=>{

	response.send([1, 2, 3]);
});

router.get('/:mentorId', (request, response)=>{

	response.send(request.params.mentorId);
});


module.exports= router;