"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _middleware = _interopRequireDefault(require("../middleware/middleware"));

var _admin = _interopRequireDefault(require("../controllers/admin"));

var _upgrade = _interopRequireDefault(require("../middleware/upgrade"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var router = _express["default"].Router();

router.patch('/:userId', _middleware["default"].checkUserToken, _upgrade["default"].upgradeToMentor, _admin["default"].upgrade);
var _default = router;
exports["default"] = _default;