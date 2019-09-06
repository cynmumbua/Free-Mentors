
import express from 'express';
const router = express.Router();
import Middleware from '../middleware/middleware';
import admin from '../controllers/admin';
import upgrade from '../middleware/upgrade';

router.patch('/:userId', Middleware.checkUserToken, upgrade.upgradeToMentor, admin.upgrade);

export default router;