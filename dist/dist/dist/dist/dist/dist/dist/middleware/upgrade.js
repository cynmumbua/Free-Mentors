"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _usersInfo = _interopRequireDefault(require("../models/usersInfo"));

var _createUsers = require("../models/createUsers");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

class Upgrade {
  static async upgradeToMentor(request, response, next) {
    if (request.user.mentor == 'admin') {
      try {
        const upgradeUser = await (0, _createUsers.selectUser)(request.params.userId);

        if (upgradeUser) {
          next();
        } else {
          response.status(404).json({
            status: 404,
            message: 'user not found'
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

}

var _default = Upgrade;
exports.default = _default;