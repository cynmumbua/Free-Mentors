"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _middleware = _interopRequireDefault(require("../middleware/middleware"));

var _mentors = _interopRequireDefault(require("../controllers/mentors"));

var _mentors2 = _interopRequireDefault(require("../middleware/mentors"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var router = _express["default"].Router();

router.get('/', _middleware["default"].checkUserToken, _mentors["default"].allMentors);
router.get('/:mentorId', _middleware["default"].checkUserToken, _mentors["default"].oneMentor);
var _default = router;
exports["default"] = _default;