"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./routes/index"));

var _db = _interopRequireDefault(require("./db"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var app = (0, _express["default"])();
var port = process.env.PORT || 5000; // const environment = process.env.NODE_ENV === 'test'

_db["default"].createUsersTable();

_db["default"].createSessionsTable(); // if (environment) {
//     db.dropUsersTable();
//     db.dropSessionsTable();
//     db.createUsersTable();
// 	db.createSessionsTable();
//   }else{
// 	db.createUsersTable();
//     db.createSessionsTable();
//   }


app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use('/', _index["default"]);
app.listen(port, function () {
  return console.log("Listening on port ".concat(port));
});
var _default = app;
exports["default"] = _default;