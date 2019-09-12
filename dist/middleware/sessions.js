"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mentorsInfo = _interopRequireDefault(require("../models/mentorsInfo"));

var _sessions = _interopRequireDefault(require("../models/sessions"));

var _usersInfo = _interopRequireDefault(require("../models/usersInfo"));

var _reviews = _interopRequireDefault(require("../models/reviews"));

var _createUsers = require("../models/createUsers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Sessions {
  static async nSession(request, response, next) {
    try {
      const checkMentor = await (0, _createUsers.selectMentor)(request.body.mentorId);
      const checkUser = await (0, _createUsers.selectAllUser)(request.user.mentor);

      if (checkUser) {
        if (checkMentor) {
          const newSession = {
            sessionId: _sessions.default.length + 1,
            mentorId: request.body.mentorId,
            menteeId: request.user.userId,
            questions: request.body.questions,
            menteeEmail: request.user.email,
            status: 'pending'
          };
          request.newSession = newSession;
          next();
        } else {
          response.status(404).json({
            status: 404,
            message: 'No mentor with that Id'
          });
        }
      } else {
        response.status(409).json({
          status: 409,
          message: 'Mentor cannot create sessions'
        });
      }
    } catch (error) {
      throw error;
    }
  }

  static viewSession(request, response, next) {
    const userId = request.user.userId;

    if (request.user.mentor == false) {
      const mentorSessions = _sessions.default.filter(sessions => sessions.menteeId == userId);

      request.mentorSessions = mentorSessions;
      next();
    } else if (request.user.mentor == true) {
      const mentorSessions = _sessions.default.filter(sessions => sessions.mentorId == userId);

      request.mentorSessions = mentorSessions;
      next();
    } else {
      response.status(401).json({
        message: 'Unauthorised access'
      });
    }
  }

  static async acceptSession(request, response, next) {
    const userId = request.user.userId;

    if (request.user.mentor == 'true') {
      try {
        const acceptSession = await (0, _createUsers.selectSessions)(request.params.sessionId);

        if (acceptSession) {
          next();
        } else {
          response.status(404).json({
            status: 404,
            message: 'session not found'
          });
        }
      } catch (error) {
        throw error;
      }
    } else {
      response.status(401).json({
        status: 401,
        message: 'Unauthorised access'
      });
    }
  }

  static async declineSession(request, response, next) {
    const userId = request.user.userId;

    if (request.user.mentor == 'true') {
      try {
        const rejectSession = await (0, _createUsers.selectSessions)(request.params.sessionId);

        if (rejectSession) {
          next();
        } else {
          response.status(404).json({
            status: 404,
            message: 'session not found'
          });
        }
      } catch (error) {
        throw error;
      }
    } else {
      response.status(401).json({
        status: 401,
        message: 'Unauthorised access'
      });
    }
  }

  static reviewSession(request, response, next) {
    const requestedSession = _sessions.default.find(sessions => sessions.sessionId == request.params.sessionId);

    if (requestedSession) {
      if (requestedSession.menteeId == request.user.userId) {
        if (requestedSession.status !== 'accepted') {
          return response.status(403).json({
            message: 'session has not been accepted'
          });
        }

        const review = {
          sessionId: requestedSession.sessionId,
          mentorId: requestedSession.mentorId,
          menteeId: requestedSession.menteeId,
          score: request.body.score,
          menteeFullName: `${request.user.firstName} ${request.user.lastName}`,
          remark: request.body.remark
        };
        request.review = review;
        next();
      } else {
        response.status(409).json({
          message: 'confirm your session Id'
        });
      }
    } else {
      response.status(404).json({
        message: 'session with that id not found'
      });
    }
  }

  static deleteReview(request, response, next) {
    if (request.user.mentor == 'admin') {
      const deleteReview = _reviews.default.find(reviews => reviews.sessionId == request.params.sessionId);

      if (deleteReview) {
        _reviews.default.splice(_reviews.default.indexOf(deleteReview), 1); // request.deleteReview = deleteReview;


        next();
      } else {
        response.status(404).json({
          message: 'review with that id not found'
        });
      }
    } else {
      response.status(401).json({
        message: 'Unauthorised access'
      });
    }
  }

}

var _default = Sessions;
exports.default = _default;