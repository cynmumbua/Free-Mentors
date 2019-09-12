"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneMentor = exports.getMentors = void 0;

var _sessions = _interopRequireDefault(require("./sessions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getMentors = async () => {
  const getMentor = `SELECT * FROM users WHERE mentor= 'true'`;

  try {
    const {
      rows
    } = await (0, _sessions.default)(getMentor);
    return rows;
  } catch (error) {
    return error;
  }
};

exports.getMentors = getMentors;

const getOneMentor = async id => {
  const oneMentor = `SELECT * FROM users WHERE id = $1 AND mentor= 'true'`;
  const ids = [id];

  try {
    const {
      rows
    } = await (0, _sessions.default)(oneMentor, ids);
    return rows[0];
  } catch (error) {
    return error;
  }
};

exports.getOneMentor = getOneMentor;