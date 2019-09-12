"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createUsers = require("../models/createUsers");

class Admin {
  static async upgrade(request, response) {
    try {
      const admin = await (0, _createUsers.upgradeMentor)(request.params.userId);
      delete admin.password;
      response.status(200).json({
        status: 200,
        message: 'User upgraded to mentor successfully',
        data: admin
      });
    } catch (error) {
      throw error;
    }
  }

}

var _default = Admin;
exports.default = _default;