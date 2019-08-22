//import express
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const auth = require('./routes/auth');
const mentors = require('./routes/mentors');
const sessions =require('./routes/sessions');
const admin = require('./routes/admin');

app.use('/api/v1/auth', auth);

app.patch('/api/v1/user/:userId',admin );

app.use('/api/v1/mentors', mentors);

app.use('/api/v1/sessions', sessions);



app.listen(port, ()=> console.log(`Listening on port ${port}`));

module.exports= app;