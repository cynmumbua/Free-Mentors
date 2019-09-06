import express from 'express';
const router = express.Router();
import Middleware from '../middleware/middleware';
import sessions from '../controllers/sessions';
import sessionsV from '../middleware/sessionsV';
import sessionsC from '../middleware/sessions'


router.post('/', Middleware.checkUserToken, sessionsV.vSessions, sessionsC.nSession, sessions.createSession);

router.get('/',Middleware.checkUserToken, sessionsC.viewSession, sessions.viewSessions);

router.patch('/:sessionId/accept',Middleware.checkUserToken, sessionsC.acceptSession, sessions.acceptSessions);

router.patch('/:sessionId/reject',Middleware.checkUserToken, sessionsC.declineSession, sessions.rejectSessions);

router.post('/:sessionId/review', Middleware.checkUserToken, sessionsV.vReviews, sessionsC.reviewSession, sessions.reviewSessions);

router.delete('/:sessionId/delete', Middleware.checkUserToken,sessionsC.deleteReview, sessions.deleteReviews);

export default router;
