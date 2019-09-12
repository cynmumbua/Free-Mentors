"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _auth = _interopRequireDefault(require("./auth"));

var _mentors = _interopRequireDefault(require("./mentors"));

var _sessions = _interopRequireDefault(require("./sessions"));

var _admin = _interopRequireDefault(require("./admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.default)();
router.use('/api/v1/auth', _auth.default);
router.use('/api/v1/user', _admin.default);
router.use('/api/v1/mentors', _mentors.default);
router.use('/api/v1/sessions', _sessions.default);
var _default = router;
exports.default = _default;