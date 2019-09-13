"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var Middleware =
/*#__PURE__*/
function () {
  function Middleware() {
    _classCallCheck(this, Middleware);
  }

  _createClass(Middleware, null, [{
    key: "checkUserToken",
    value: function checkUserToken(request, response, next) {
      var userToken = request.headers['token'];

      if (userToken) {
        try {
          var user = _jsonwebtoken["default"].verify(userToken, 'key');

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
  }]);

  return Middleware;
}();

var _default = Middleware;
exports["default"] = _default;