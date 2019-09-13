"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _usersInfo = _interopRequireDefault(require("../models/usersInfo"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _createUsers = require("../models/createUsers");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
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

var CheckUser =
/*#__PURE__*/
function () {
  function CheckUser() {
    _classCallCheck(this, CheckUser);
  }

  _createClass(CheckUser, null, [{
    key: "signup",
    value: function () {
      var _signup = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(request, response, next) {
        var checkEmail, password, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _createUsers.getUser)(request.body.email);

              case 3:
                checkEmail = _context.sent;
                password = _bcrypt["default"].hashSync(request.body.password, 6); //capture user details in an object

                if (checkEmail) {
                  _context.next = 11;
                  break;
                }

                user = {
                  userId: _usersInfo["default"].length + 1,
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
                _context.next = 12;
                break;

              case 11:
                return _context.abrupt("return", response.status(409).json({
                  status: 409,
                  message: 'That email is already in use'
                }));

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
      }));

      function signup(_x, _x2, _x3) {
        return _signup.apply(this, arguments);
      }

      return signup;
    }()
  }, {
    key: "signin",
    value: function () {
      var _signin = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(request, response, next) {
        var checkUser, passwordCheck, token;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _createUsers.getUser)(request.body.email);

              case 3:
                checkUser = _context2.sent;

                if (!checkUser) {
                  _context2.next = 16;
                  break;
                }

                console.log(checkUser);
                passwordCheck = _bcrypt["default"].compareSync(request.body.password, checkUser.password);

                if (!passwordCheck) {
                  _context2.next = 13;
                  break;
                }

                token = _jsonwebtoken["default"].sign({
                  userId: checkUser.id,
                  email: checkUser.email,
                  mentor: checkUser.mentor,
                  firstName: checkUser.firstname,
                  lastName: checkUser.lastname
                }, 'key');
                request.token = token;
                next();
                _context2.next = 14;
                break;

              case 13:
                return _context2.abrupt("return", response.status(409).json({
                  status: 409,
                  message: 'Password do not match'
                }));

              case 14:
                _context2.next = 17;
                break;

              case 16:
                return _context2.abrupt("return", response.status(409).json({
                  status: 409,
                  message: 'User not found'
                }));

              case 17:
                _context2.next = 22;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 19]]);
      }));

      function signin(_x4, _x5, _x6) {
        return _signin.apply(this, arguments);
      }

      return signin;
    }()
  }]);

  return CheckUser;
}();

var _default = CheckUser;
exports["default"] = _default;