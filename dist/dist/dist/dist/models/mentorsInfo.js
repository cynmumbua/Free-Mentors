"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneMentor = exports.getMentors = void 0;

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

var getMentors =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var getMentor, _ref2, rows;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            getMentor = "SELECT * FROM users WHERE mentor= 'true'";
            _context.prev = 1;
            _context.next = 4;
            return (0, _sessions["default"])(getMentor);

          case 4:
            _ref2 = _context.sent;
            rows = _ref2.rows;
            return _context.abrupt("return", rows);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", _context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function getMentors() {
    return _ref.apply(this, arguments);
  };
}();

exports.getMentors = getMentors;

var getOneMentor =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(id) {
    var oneMentor, ids, _ref4, rows;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            oneMentor = "SELECT * FROM users WHERE id = $1 AND mentor= 'true'";
            ids = [id];
            _context2.prev = 2;
            _context2.next = 5;
            return (0, _sessions["default"])(oneMentor, ids);

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

  return function getOneMentor(_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOneMentor = getOneMentor;