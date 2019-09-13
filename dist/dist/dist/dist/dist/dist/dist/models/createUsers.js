"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rejectSession = exports.acceptSession = exports.selectSessions = exports.selectAllUser = exports.sessions = exports.selectMentor = exports.upgradeMentor = exports.selectUser = exports.getUser = exports.signup = void 0;

var _sessions = _interopRequireDefault(require("./sessions"));

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

var signup =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(data) {
    var createQuery, values, _ref2, rows;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            createQuery = "INSERT INTO\n      users(firstName,lastName,email,password,address,bio,occupation,expertise,mentor)\n\t      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)\n\t      returning *";
            values = [data.firstName, data.lastName, data.email, data.password, data.address, data.occupation, data.bio, data.expertise, data.mentor];
            _context.prev = 2;
            _context.next = 5;
            return (0, _sessions["default"])(createQuery, values);

          case 5:
            _ref2 = _context.sent;
            rows = _ref2.rows;
            return _context.abrupt("return", rows[0]);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            throw _context.t0;

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));

  return function signup(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var getUser =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(email) {
    var getUser, emails, _ref4, rows;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            getUser = "SELECT * FROM users WHERE email = $1";
            emails = [email];
            _context2.prev = 2;
            _context2.next = 5;
            return (0, _sessions["default"])(getUser, emails);

          case 5:
            _ref4 = _context2.sent;
            rows = _ref4.rows;
            return _context2.abrupt("return", rows[0]);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            return _context2.abrupt("return", _context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));

  return function getUser(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUser = getUser;

var selectUser =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(id) {
    var selectUser, ids, _ref6, rows;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            selectUser = "SELECT * FROM users WHERE id = $1 AND mentor= 'false'";
            ids = [id];
            _context3.prev = 2;
            _context3.next = 5;
            return (0, _sessions["default"])(selectUser, ids);

          case 5:
            _ref6 = _context3.sent;
            rows = _ref6.rows;
            return _context3.abrupt("return", rows[0]);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](2);
            return _context3.abrupt("return", _context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 10]]);
  }));

  return function selectUser(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

exports.selectUser = selectUser;

var upgradeMentor =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(id) {
    var upgradeMentor, upgradedUser, ids, upgradeUserQuery, _ref8, rows;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            upgradeMentor = "UPDATE users SET mentor= 'true' WHERE id = $1 AND mentor='false'";
            upgradedUser = " SELECT * FROM users WHERE id = $1";
            ids = [id];
            _context4.prev = 3;
            _context4.next = 6;
            return (0, _sessions["default"])(upgradeMentor, ids);

          case 6:
            upgradeUserQuery = _context4.sent;
            _context4.next = 9;
            return (0, _sessions["default"])(upgradedUser, ids);

          case 9:
            _ref8 = _context4.sent;
            rows = _ref8.rows;
            return _context4.abrupt("return", rows[0]);

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](3);
            return _context4.abrupt("return", _context4.t0);

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 14]]);
  }));

  return function upgradeMentor(_x4) {
    return _ref7.apply(this, arguments);
  };
}();

exports.upgradeMentor = upgradeMentor;

var selectMentor =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(id) {
    var selectMentor, ids, _ref10, rows;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            selectMentor = "SELECT * FROM users WHERE id = $1 AND mentor= 'true'";
            ids = [id];
            _context5.prev = 2;
            _context5.next = 5;
            return (0, _sessions["default"])(selectMentor, ids);

          case 5:
            _ref10 = _context5.sent;
            rows = _ref10.rows;
            return _context5.abrupt("return", rows[0]);

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            return _context5.abrupt("return", _context5.t0);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));

  return function selectMentor(_x5) {
    return _ref9.apply(this, arguments);
  };
}();

exports.selectMentor = selectMentor;

var sessions =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(data) {
    var createQuery, values, _ref12, rows;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log(data);
            createQuery = "INSERT INTO\n      sessions(mentorId, menteeId, questions, menteeEmail, status)\n        VALUES($1, $2, $3, $4, $5)\n        returning *";
            values = [data.mentorId, data.menteeId, data.questions, data.menteeEmail, data.status];
            _context6.prev = 3;
            _context6.next = 6;
            return (0, _sessions["default"])(createQuery, values);

          case 6:
            _ref12 = _context6.sent;
            rows = _ref12.rows;
            return _context6.abrupt("return", rows[0]);

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](3);
            throw _context6.t0;

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 11]]);
  }));

  return function sessions(_x6) {
    return _ref11.apply(this, arguments);
  };
}();

exports.sessions = sessions;

var selectAllUser =
/*#__PURE__*/
function () {
  var _ref13 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(mentor) {
    var selectAllUser, mentors, _ref14, rows;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            selectAllUser = "SELECT * FROM users WHERE mentor= 'false'";
            mentors = [mentor];
            _context7.prev = 2;
            _context7.next = 5;
            return (0, _sessions["default"])(selectAllUser, mentors);

          case 5:
            _ref14 = _context7.sent;
            rows = _ref14.rows;
            return _context7.abrupt("return", rows[0]);

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](2);
            return _context7.abrupt("return", _context7.t0);

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 10]]);
  }));

  return function selectAllUser(_x7) {
    return _ref13.apply(this, arguments);
  };
}();

exports.selectAllUser = selectAllUser;

var selectSessions =
/*#__PURE__*/
function () {
  var _ref15 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(id) {
    var selectSessions, ids, _ref16, rows;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            selectSessions = "SELECT * FROM sessions WHERE id = $1 AND status='pending' ";
            ids = [id];
            _context8.prev = 2;
            _context8.next = 5;
            return (0, _sessions["default"])(selectSessions, ids);

          case 5:
            _ref16 = _context8.sent;
            rows = _ref16.rows;
            return _context8.abrupt("return", rows[0]);

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](2);
            return _context8.abrupt("return", _context8.t0);

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 10]]);
  }));

  return function selectSessions(_x8) {
    return _ref15.apply(this, arguments);
  };
}();

exports.selectSessions = selectSessions;

var acceptSession =
/*#__PURE__*/
function () {
  var _ref17 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(id) {
    var acceptSession, ids, _ref18, rows;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            acceptSession = "UPDATE sessions SET status= 'accepted' WHERE id = $1 returning *";
            ids = [id];
            _context9.prev = 2;
            _context9.next = 5;
            return (0, _sessions["default"])(acceptSession, ids);

          case 5:
            _ref18 = _context9.sent;
            rows = _ref18.rows;
            return _context9.abrupt("return", rows[0]);

          case 10:
            _context9.prev = 10;
            _context9.t0 = _context9["catch"](2);
            return _context9.abrupt("return", _context9.t0);

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 10]]);
  }));

  return function acceptSession(_x9) {
    return _ref17.apply(this, arguments);
  };
}();

exports.acceptSession = acceptSession;

var rejectSession =
/*#__PURE__*/
function () {
  var _ref19 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(id) {
    var rejectSession, ids, _ref20, rows;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            rejectSession = "UPDATE sessions SET status= 'rejected' WHERE id = $1 returning *";
            ids = [id];
            _context10.prev = 2;
            _context10.next = 5;
            return (0, _sessions["default"])(rejectSession, ids);

          case 5:
            _ref20 = _context10.sent;
            rows = _ref20.rows;
            return _context10.abrupt("return", rows[0]);

          case 10:
            _context10.prev = 10;
            _context10.t0 = _context10["catch"](2);
            return _context10.abrupt("return", _context10.t0);

          case 13:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 10]]);
  }));

  return function rejectSession(_x10) {
    return _ref19.apply(this, arguments);
  };
}();

exports.rejectSession = rejectSession;