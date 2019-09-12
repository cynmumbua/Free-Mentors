"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createUsers = require("../models/createUsers");

var _mentorsInfo = _interopRequireDefault(require("../models/mentorsInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Mentors {
  static async viewMentor(request, response, next) {
    try {
      const checkMentor = await (0, _createUsers.getUser)(request.params.mentorId);

      if (checkMentor) {
        request.checkMentor = checkMentor;
        next();
      } else {
        response.status(404).json({
          status: 404,
          message: 'Mentor not found'
        });
      }
    } catch (error) {
      throw error;
    }
  }

}

var _default = Mentors;
exports.default = _default;