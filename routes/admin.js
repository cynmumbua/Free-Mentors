
const express = require('express');
const router = express.Router();

router.patch('/', (request, response)=>{

	response.send('This is my first app');
});

module.exports = router;