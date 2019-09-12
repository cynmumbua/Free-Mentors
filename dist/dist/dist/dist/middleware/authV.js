"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

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

var Validations =
/*#__PURE__*/
function () {
  function Validations() {
    _classCallCheck(this, Validations);
  }

  _createClass(Validations, null, [{
    key: "vSignup",
    value: function vSignup(request, response, next) {
      var validateSignup = function validateSignup(formData) {
        var schema = {
          firstName: _joi["default"].string().required().min(3),
          lastName: _joi["default"].string().required().min(3),
          email: _joi["default"].string().regex(/\S+@\S+\.\S+/).required().email(),
          password: _joi["default"].string().required().min(6),
          address: _joi["default"].string().required().min(3),
          bio: _joi["default"].string().required(),
          occupation: _joi["default"].string().required(),
          expertise: _joi["default"].string().required()
        };
        return _joi["default"].validate(formData, schema);
      };

      var _validateSignup = validateSignup(request.body),
          error = _validateSignup.error;

      if (error) {
        return response.status(409).json({
          status: 409,
          message: error.details[0].message
        });
      }

      next();
    }
  }, {
    key: "vSignin",
    value: function vSignin(request, response, next) {
      var validateSignin = function validateSignin(formData) {
        var schema = {
          email: _joi["default"].string().required().email(),
          password: _joi["default"].string().required()
        };
        return _joi["default"].validate(formData, schema);
      };

      var _validateSignin = validateSignin(request.body),
          error = _validateSignin.error;

      if (error) {
        return response.status(409).json({
          status: 409,
          message: error.details[0].message
        });
      }

      next();
    }
  }]);

  return Validations;
}();

var _default = Validations;
exports["default"] = _default;