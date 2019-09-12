"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _usersInfo = _interopRequireDefault(require("../models/usersInfo"));

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

var Upgrade =
/*#__PURE__*/
function () {
  function Upgrade() {
    _classCallCheck(this, Upgrade);
  }

  _createClass(Upgrade, null, [{
    key: "upgradeToMentor",
    value: function () {
      var _upgradeToMentor = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(request, response, next) {
        var upgradeUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(request.user.mentor == 'admin')) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return (0, _createUsers.selectUser)(request.params.userId);

              case 4:
                upgradeUser = _context.sent;

                if (upgradeUser) {
                  next();
                } else {
                  response.status(404).json({
                    status: 404,
                    message: 'user not found'
                  });
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                throw _context.t0;

              case 11:
                _context.next = 14;
                break;

              case 13:
                response.status(401).json({
                  status: 401,
                  message: 'Unauthorised access'
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      function upgradeToMentor(_x, _x2, _x3) {
        return _upgradeToMentor.apply(this, arguments);
      }

      return upgradeToMentor;
    }()
  }]);

  return Upgrade;
}();

var _default = Upgrade;
exports["default"] = _default;