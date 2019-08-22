const express = require('express');
const router = express.Router();

router.post('/signup', (request, response)=>{

	response.send('This is my first app');
});

router.post('/signin', (request, response)=>{

	response.send('This is my first app');
});

module.exports= router;