import express from 'express';
const router = express.Router();
import Middleware from '../middleware/middleware';
import mentors from '../controllers/mentors';
import mentorsM from '../middleware/mentors';

router.get('/',Middleware.checkUserToken, mentors.allMentors);

router.get('/:mentorId',Middleware.checkUserToken, mentors.oneMentor);


export default router;