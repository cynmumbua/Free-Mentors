"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mentorsInfo = require("../models/mentorsInfo");

var _auth = _interopRequireDefault(require("../controllers/auth"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

class Mentors {
  static async allMentors(request, response) {
    try {
      const mentors = await (0, _mentorsInfo.getMentors)();

      if (mentors) {
        mentors.forEach(mentor => {
          delete mentor.password;
        });
        response.status(200).json({
          status: 200,
          message: 'Succesfuly retrived all the mentors',
          data: mentors
        });
      } else {
        response.status(404).json({
          status: 404,
          message: 'mentors not found'
        });
      }
    } catch (error) {
      throw error;
    }
  }

  static async oneMentor(request, response) {
    try {
      const mentor = await (0, _mentorsInfo.getOneMentor)(request.params.mentorId);

      if (mentor) {
        delete mentor.password;
        response.status(200).json({
          status: 200,
          message: 'More about the mentor',
          data: await mentor
        });
      } else {
        response.status(404).json({
          status: 404,
          message: 'mentor with that ID not found'
        });
      }
    } catch (error) {
      throw error;
    }
  }

}

var _default = Mentors;
exports.default = _default;