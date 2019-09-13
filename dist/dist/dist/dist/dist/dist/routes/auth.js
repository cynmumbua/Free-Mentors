"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authV = _interopRequireDefault(require("../middleware/authV"));

var _checkUser = _interopRequireDefault(require("../middleware/checkUser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _auth = _interopRequireDefault(require("../controllers/auth"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var router = _express["default"].Router(); //signup route


router.post('/signup', _authV["default"].vSignup, _checkUser["default"].signup, _auth["default"].signup);
router.post('/signin', _authV["default"].vSignin, _checkUser["default"].signin, _auth["default"].signin);
var _default = router;
exports["default"] = _default;