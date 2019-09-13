"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Validate =
/*#__PURE__*/
function () {
  function Validate() {
    _classCallCheck(this, Validate);
  }

  _createClass(Validate, null, [{
    key: "vSessions",
    value: function vSessions(request, response, next) {
      var validateQuestion = function validateQuestion(formData) {
        var schema = {
          mentorId: _joi["default"].number().required(),
          questions: _joi["default"].string().required().min(6)
        };
        return _joi["default"].validate(formData, schema);
      };

      var _validateQuestion = validateQuestion(request.body),
          error = _validateQuestion.error;

      if (error) {
        return response.status(409).json({
          message: error.details[0].message
        });
      }

      next();
    }
  }, {
    key: "vReviews",
    value: function vReviews(request, response, next) {
      var validateReview = function validateReview(formData) {
        var schema = {
          score: _joi["default"].number().required(),
          remark: _joi["default"].string().required().min(4)
        };
        return _joi["default"].validate(formData, schema);
      };

      var _validateReview = validateReview(request.body),
          error = _validateReview.error;

      if (error) {
        return response.status(409).json({
          message: error.details[0].message
        });
      }

      next();
    }
  }]);

  return Validate;
}();

var _default = Validate;
exports["default"] = _default;