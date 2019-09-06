// import express
import express from 'express';

const app = express();
const port = process.env.PORT || 5000;
import auth from './routes/auth';
import mentors from './routes/mentors';
import sessions from './routes/sessions';
import admin from './routes/admin';

app.use(express.json());

app.use('/api/v1/auth', auth);

app.use('/api/v1/user', admin);

app.use('/api/v1/mentors', mentors);

app.use('/api/v1/sessions', sessions);


app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;