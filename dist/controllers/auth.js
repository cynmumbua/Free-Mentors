"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createUsers = require("../models/createUsers");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthController {
  static async signup(request, response) {
    try {
      const output = await (0, _createUsers.signup)(request.user);

      const token = _jsonwebtoken.default.sign({
        userId: output.id,
        email: request.user.email,
        mentor: request.user.mentor,
        firstName: request.user.firstName,
        lastName: request.user.lastName
      }, 'key');

      delete output.password;
      response.status(201).json({
        status: 201,
        message: 'user created succesfully',
        data: await output,
        token: token
      });
    } catch (error) {
      throw error;
    }
  }

  static async signin(request, response) {
    const output = await (0, _createUsers.getUser)(request.body.email);
    delete output.password;
    response.status(200).json({
      status: 200,
      message: 'User is succesfully logged in',
      data: await output,
      token: request.token
    });
  }

}

var _default = AuthController;
exports.default = _default;