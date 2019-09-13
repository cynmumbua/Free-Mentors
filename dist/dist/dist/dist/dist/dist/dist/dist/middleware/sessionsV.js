"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

class Validate {
  static vSessions(request, response, next) {
    const validateQuestion = formData => {
      const schema = {
        mentorId: _joi.default.number().required(),
        questions: _joi.default.string().required().min(6)
      };
      return _joi.default.validate(formData, schema);
    };

    const {
      error
    } = validateQuestion(request.body);

    if (error) {
      return response.status(409).json({
        message: error.details[0].message
      });
    }

    next();
  }

  static vReviews(request, response, next) {
    const validateReview = formData => {
      const schema = {
        score: _joi.default.number().required(),
        remark: _joi.default.string().required().min(4)
      };
      return _joi.default.validate(formData, schema);
    };

    const {
      error
    } = validateReview(request.body);

    if (error) {
      return response.status(409).json({
        message: error.details[0].message
      });
    }

    next();
  }

}

var _default = Validate;
exports.default = _default;