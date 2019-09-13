"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

class Validations {
  static vSignup(request, response, next) {
    const validateSignup = formData => {
      const schema = {
        firstName: _joi.default.string().required().min(3),
        lastName: _joi.default.string().required().min(3),
        email: _joi.default.string().regex(/\S+@\S+\.\S+/).required().email(),
        password: _joi.default.string().required().min(6),
        address: _joi.default.string().required().min(3),
        bio: _joi.default.string().required(),
        occupation: _joi.default.string().required(),
        expertise: _joi.default.string().required()
      };
      return _joi.default.validate(formData, schema);
    };

    const {
      error
    } = validateSignup(request.body);

    if (error) {
      return response.status(409).json({
        status: 409,
        message: error.details[0].message
      });
    }

    next();
  }

  static vSignin(request, response, next) {
    const validateSignin = formData => {
      const schema = {
        email: _joi.default.string().required().email(),
        password: _joi.default.string().required()
      };
      return _joi.default.validate(formData, schema);
    };

    const {
      error
    } = validateSignin(request.body);

    if (error) {
      return response.status(409).json({
        status: 409,
        message: error.details[0].message
      });
    }

    next();
  }

}

var _default = Validations;
exports.default = _default;