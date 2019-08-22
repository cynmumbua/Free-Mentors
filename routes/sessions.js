const express = require('express');
const router = express.Router();

router.get('/', (request, response)=>{

	response.send('This is my first app');
});

router.post('/', (request, response)=>{

	response.send('This is my first app');
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

module.exports= router;