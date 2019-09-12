"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Middleware {
  static checkUserToken(request, response, next) {
    const userToken = request.headers['token'];

    if (userToken) {
      try {
        const user = _jsonwebtoken.default.verify(userToken, 'key');

        request.user = user;
        next();
      } catch (error) {
        return response.status(409).json({
          status: 409,
          message: 'invalid token'
        });
      }
    } else {
      return response.status(409).json({
        status: 400,
        message: 'Please input token'
      });
    }
  }

}

var _default = Middleware;
exports.default = _default;