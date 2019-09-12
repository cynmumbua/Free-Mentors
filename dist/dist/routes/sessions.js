"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _middleware = _interopRequireDefault(require("../middleware/middleware"));

var _sessions = _interopRequireDefault(require("../controllers/sessions"));

var _sessionsV = _interopRequireDefault(require("../middleware/sessionsV"));

var _sessions2 = _interopRequireDefault(require("../middleware/sessions"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const router = _express.default.Router();

router.post('/', _middleware.default.checkUserToken, _sessionsV.default.vSessions, _sessions2.default.nSession, _sessions.default.createSession);
router.get('/', _middleware.default.checkUserToken, _sessions2.default.viewSession, _sessions.default.viewSessions);
router.patch('/:sessionId/accept', _middleware.default.checkUserToken, _sessions2.default.acceptSession, _sessions.default.acceptSessions);
router.patch('/:sessionId/reject', _middleware.default.checkUserToken, _sessions2.default.declineSession, _sessions.default.rejectSessions);
router.post('/:sessionId/review', _middleware.default.checkUserToken, _sessionsV.default.vReviews, _sessions2.default.reviewSession, _sessions.default.reviewSessions);
router.delete('/:sessionId/delete', _middleware.default.checkUserToken, _sessions2.default.deleteReview, _sessions.default.deleteReviews);
var _default = router;
exports.default = _default;