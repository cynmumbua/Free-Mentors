"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mentorsInfo = _interopRequireDefault(require("../models/mentorsInfo"));

var _sessions = _interopRequireDefault(require("../models/sessions"));

var _usersInfo = _interopRequireDefault(require("../models/usersInfo"));

var _reviews = _interopRequireDefault(require("../models/reviews"));

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

var Sessions =
/*#__PURE__*/
function () {
  function Sessions() {
    _classCallCheck(this, Sessions);
  }

  _createClass(Sessions, null, [{
    key: "nSession",
    value: function () {
      var _nSession = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(request, response, next) {
        var checkMentor, checkUser, newSession;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _createUsers.selectMentor)(request.body.mentorId);

              case 3:
                checkMentor = _context.sent;
                _context.next = 6;
                return (0, _createUsers.selectAllUser)(request.user.mentor);

              case 6:
                checkUser = _context.sent;

                if (checkUser) {
                  if (checkMentor) {
                    newSession = {
                      sessionId: _sessions["default"].length + 1,
                      mentorId: request.body.mentorId,
                      menteeId: request.user.userId,
                      questions: request.body.questions,
                      menteeEmail: request.user.email,
                      status: 'pending'
                    };
                    request.newSession = newSession;
                    next();
                  } else {
                    response.status(404).json({
                      status: 404,
                      message: 'No mentor with that Id'
                    });
                  }
                } else {
                  response.status(409).json({
                    status: 409,
                    message: 'Mentor cannot create sessions'
                  });
                }

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));

      function nSession(_x, _x2, _x3) {
        return _nSession.apply(this, arguments);
      }

      return nSession;
    }()
  }, {
    key: "viewSession",
    value: function viewSession(request, response, next) {
      var userId = request.user.userId;

      if (request.user.mentor == false) {
        var mentorSessions = _sessions["default"].filter(function (sessions) {
          return sessions.menteeId == userId;
        });

        request.mentorSessions = mentorSessions;
        next();
      } else if (request.user.mentor == true) {
        var _mentorSessions = _sessions["default"].filter(function (sessions) {
          return sessions.mentorId == userId;
        });

        request.mentorSessions = _mentorSessions;
        next();
      } else {
        response.status(401).json({
          message: 'Unauthorised access'
        });
      }
    }
  }, {
    key: "acceptSession",
    value: function () {
      var _acceptSession = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(request, response, next) {
        var userId, _acceptSession2;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userId = request.user.userId;

                if (!(request.user.mentor == 'true')) {
                  _context2.next = 14;
                  break;
                }

                _context2.prev = 2;
                _context2.next = 5;
                return (0, _createUsers.selectSessions)(request.params.sessionId);

              case 5:
                _acceptSession2 = _context2.sent;

                if (_acceptSession2) {
                  next();
                } else {
                  response.status(404).json({
                    status: 404,
                    message: 'session not found'
                  });
                }

                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                throw _context2.t0;

              case 12:
                _context2.next = 15;
                break;

              case 14:
                response.status(401).json({
                  status: 401,
                  message: 'Unauthorised access'
                });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 9]]);
      }));

      function acceptSession(_x4, _x5, _x6) {
        return _acceptSession.apply(this, arguments);
      }

      return acceptSession;
    }()
  }, {
    key: "declineSession",
    value: function () {
      var _declineSession = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(request, response, next) {
        var userId, rejectSession;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userId = request.user.userId;

                if (!(request.user.mentor == 'true')) {
                  _context3.next = 14;
                  break;
                }

                _context3.prev = 2;
                _context3.next = 5;
                return (0, _createUsers.selectSessions)(request.params.sessionId);

              case 5:
                rejectSession = _context3.sent;

                if (rejectSession) {
                  next();
                } else {
                  response.status(404).json({
                    status: 404,
                    message: 'session not found'
                  });
                }

                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                throw _context3.t0;

              case 12:
                _context3.next = 15;
                break;

              case 14:
                response.status(401).json({
                  status: 401,
                  message: 'Unauthorised access'
                });

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 9]]);
      }));

      function declineSession(_x7, _x8, _x9) {
        return _declineSession.apply(this, arguments);
      }

      return declineSession;
    }()
  }, {
    key: "reviewSession",
    value: function reviewSession(request, response, next) {
      var requestedSession = _sessions["default"].find(function (sessions) {
        return sessions.sessionId == request.params.sessionId;
      });

      if (requestedSession) {
        if (requestedSession.menteeId == request.user.userId) {
          if (requestedSession.status !== 'accepted') {
            return response.status(403).json({
              message: 'session has not been accepted'
            });
          }

          var review = {
            sessionId: requestedSession.sessionId,
            mentorId: requestedSession.mentorId,
            menteeId: requestedSession.menteeId,
            score: request.body.score,
            menteeFullName: "".concat(request.user.firstName, " ").concat(request.user.lastName),
            remark: request.body.remark
          };
          request.review = review;
          next();
        } else {
          response.status(409).json({
            message: 'confirm your session Id'
          });
        }
      } else {
        response.status(404).json({
          message: 'session with that id not found'
        });
      }
    }
  }, {
    key: "deleteReview",
    value: function deleteReview(request, response, next) {
      if (request.user.mentor == 'admin') {
        var deleteReview = _reviews["default"].find(function (reviews) {
          return reviews.sessionId == request.params.sessionId;
        });

        if (deleteReview) {
          _reviews["default"].splice(_reviews["default"].indexOf(deleteReview), 1); // request.deleteReview = deleteReview;


          next();
        } else {
          response.status(404).json({
            message: 'review with that id not found'
          });
        }
      } else {
        response.status(401).json({
          message: 'Unauthorised access'
        });
      }
    }
  }]);

  return Sessions;
}();

var _default = Sessions;
exports["default"] = _default;