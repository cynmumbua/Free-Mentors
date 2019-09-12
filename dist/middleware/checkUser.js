"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _usersInfo = _interopRequireDefault(require("../models/usersInfo"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _createUsers = require("../models/createUsers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CheckUser {
  static async signup(request, response, next) {
    try {
      const checkEmail = await (0, _createUsers.getUser)(request.body.email);

      const password = _bcrypt.default.hashSync(request.body.password, 6); //capture user details in an object


      if (!checkEmail) {
        const user = {
          userId: _usersInfo.default.length + 1,
          firstName: request.body.firstName,
          lastName: request.body.lastName,
          email: request.body.email,
          password: password,
          address: request.body.address,
          bio: request.body.bio,
          occupation: request.body.occupation,
          expertise: request.body.expertise,
          mentor: 'false'
        };
        request.user = user;
        next();
      } else {
        return response.status(409).json({
          status: 409,
          message: 'That email is already in use'
        });
      }
    } catch (error) {
      throw error;
    }
  }

  static async signin(request, response, next) {
    try {
      const checkUser = await (0, _createUsers.getUser)(request.body.email);

      if (checkUser) {
        console.log(checkUser);

        const passwordCheck = _bcrypt.default.compareSync(request.body.password, checkUser.password);

        if (passwordCheck) {
          const token = _jsonwebtoken.default.sign({
            userId: checkUser.id,
            email: checkUser.email,
            mentor: checkUser.mentor,
            firstName: checkUser.firstname,
            lastName: checkUser.lastname
          }, 'key');

          request.token = token;
          next();
        } else {
          return response.status(409).json({
            status: 409,
            message: 'Password do not match'
          });
        }
      } else {
        return response.status(409).json({
          status: 409,
          message: 'User not found'
        });
      }
    } catch (error) {
      throw error;
    }
  }

}

var _default = CheckUser;
exports.default = _default;