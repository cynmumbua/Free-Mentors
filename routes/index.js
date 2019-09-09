import express from 'express';
import bodyParser from 'body-parser';
const router = express();
import auth from './auth';
import mentors from './mentors';
import sessions from './sessions';
import admin from './admin';


router.use('/api/v1/auth', auth);

router.use('/api/v1/user', admin);

router.use('/api/v1/mentors', mentors);

router.use('/api/v1/sessions', sessions);



export default router;