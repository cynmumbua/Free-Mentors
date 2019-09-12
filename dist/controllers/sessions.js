"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mentorsInfo = _interopRequireDefault(require("../models/mentorsInfo"));

var _usersInfo = _interopRequireDefault(require("../models/usersInfo"));

var _reviews = _interopRequireDefault(require("../models/reviews"));

var _createUsers = require("../models/createUsers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Sessions {
  static async createSession(request, response) {
    const newSession = await (0, _createUsers.sessions)(request.newSession);
    response.status(201).json({
      status: 201,
      message: 'Session created successfully',
      data: await newSession
    });
  }

  static viewSessions(request, response) {
    response.status(200).json({
      status: 200,
      data: request.mentorSessions
    });
  }

  static async acceptSessions(request, response) {
    try {
      const session = await (0, _createUsers.acceptSession)(request.params.sessionId);
      response.status(200).json({
        status: 200,
        message: 'Session accepted successfully',
        data: await session
      });
    } catch (error) {
      throw error;
    }
  }

  static async rejectSessions(request, response) {
    try {
      const session = await (0, _createUsers.rejectSession)(request.params.sessionId);
      response.status(200).json({
        status: 200,
        message: 'Session rejected successfully',
        data: await session
      });
    } catch (error) {
      throw error;
    }
  }

  static reviewSessions(request, response) {
    _reviews.default.push(request.review);

    response.status(200).json({
      status: 200,
      data: request.review
    });
  }

  static deleteReviews(request, response) {
    response.status(200).json({
      status: 200,
      message: 'Review successfully deleted'
    });
  }

}

var _default = Sessions;
exports.default = _default;