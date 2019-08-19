//import express
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/v1/auth/signup', (request, response)=>{

	response.send('This is my first app');
});

app.post('/api/v1/auth/signup', (request, response)=>{

	response.send('This is my first app');
});

app.post('/api/v1/auth/signin', (request, response)=>{

	response.send('This is my first app');
});

app.patch('/api/v1/user/:userId', (request, response)=>{

	response.send('This is my first app');
});

app.get('/api/v1/mentors', (request, response)=>{

	response.send('This is my first app');
});

app.get('/api/v1/mentors/:mentorId', (request, response)=>{

	response.send('This is my first app');
});

app.post('/api/v1/sessions', (request, response)=>{

	response.send('This is my first app');
});

app.get('/api/v1/sessions', (request, response)=>{

	response.send('This is my first app');
});

app.patch('/api/v1/sessions/:sessionId/accept', (request, response)=>{

	response.send('This is my first app');
});

app.patch('/api/v1/sessions/:sessionId/reject', (request, response)=>{

	response.send('This is my first app');
});

app.post('/api/v1/sessions/:sessionId/review', (request, response)=>{

	response.send('This is my first app');
});

app.delete('/api/v1/sessions/:sessionId/review', (request, response)=>{

	response.send('This is my first app');
});
app.listen(port, ()=> console.log(`Listening on port ${port}`));

