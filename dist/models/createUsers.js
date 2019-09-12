"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rejectSession = exports.acceptSession = exports.selectSessions = exports.selectAllUser = exports.sessions = exports.selectMentor = exports.upgradeMentor = exports.selectUser = exports.getUser = exports.signup = void 0;

var _sessions = _interopRequireDefault(require("./sessions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const signup = async data => {
  const createQuery = `INSERT INTO
      users(firstName,lastName,email,password,address,bio,occupation,expertise,mentor)
	      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
	      returning *`;
  const values = [data.firstName, data.lastName, data.email, data.password, data.address, data.occupation, data.bio, data.expertise, data.mentor];

  try {
    const {
      rows
    } = await (0, _sessions.default)(createQuery, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

exports.signup = signup;

const getUser = async email => {
  const getUser = `SELECT * FROM users WHERE email = $1`;
  const emails = [email];

  try {
    const {
      rows
    } = await (0, _sessions.default)(getUser, emails);
    return rows[0];
  } catch (error) {
    return error;
  }
};

exports.getUser = getUser;

const selectUser = async id => {
  const selectUser = `SELECT * FROM users WHERE id = $1 AND mentor= 'false'`;
  const ids = [id];

  try {
    const {
      rows
    } = await (0, _sessions.default)(selectUser, ids);
    return rows[0];
  } catch (error) {
    return error;
  }
};

exports.selectUser = selectUser;

const upgradeMentor = async id => {
  const upgradeMentor = `UPDATE users SET mentor= 'true' WHERE id = $1 AND mentor='false'`;
  const upgradedUser = ` SELECT * FROM users WHERE id = $1`;
  const ids = [id];

  try {
    const upgradeUserQuery = await (0, _sessions.default)(upgradeMentor, ids);
    const {
      rows
    } = await (0, _sessions.default)(upgradedUser, ids);
    return rows[0];
  } catch (error) {
    return error;
  }
};

exports.upgradeMentor = upgradeMentor;

const selectMentor = async id => {
  const selectMentor = `SELECT * FROM users WHERE id = $1 AND mentor= 'true'`;
  const ids = [id];

  try {
    const {
      rows
    } = await (0, _sessions.default)(selectMentor, ids);
    return rows[0];
  } catch (error) {
    return error;
  }
};

exports.selectMentor = selectMentor;

const sessions = async data => {
  console.log(data);
  const createQuery = `INSERT INTO
      sessions(mentorId, menteeId, questions, menteeEmail, status)
        VALUES($1, $2, $3, $4, $5)
        returning *`;
  const values = [data.mentorId, data.menteeId, data.questions, data.menteeEmail, data.status];

  try {
    const {
      rows
    } = await (0, _sessions.default)(createQuery, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

exports.sessions = sessions;

const selectAllUser = async mentor => {
  const selectAllUser = `SELECT * FROM users WHERE mentor= 'false'`;
  const mentors = [mentor];

  try {
    const {
      rows
    } = await (0, _sessions.default)(selectAllUser, mentors);
    return rows[0];
  } catch (error) {
    return error;
  }
};

exports.selectAllUser = selectAllUser;

const selectSessions = async id => {
  const selectSessions = `SELECT * FROM sessions WHERE id = $1 AND status='pending' `;
  const ids = [id];

  try {
    const {
      rows
    } = await (0, _sessions.default)(selectSessions, ids);
    return rows[0];
  } catch (error) {
    return error;
  }
};

exports.selectSessions = selectSessions;

const acceptSession = async id => {
  const acceptSession = `UPDATE sessions SET status= 'accepted' WHERE id = $1 returning *`;
  const ids = [id];

  try {
    const {
      rows
    } = await (0, _sessions.default)(acceptSession, ids);
    return rows[0];
  } catch (error) {
    return error;
  }
};

exports.acceptSession = acceptSession;

const rejectSession = async id => {
  const rejectSession = `UPDATE sessions SET status= 'rejected' WHERE id = $1 returning *`;
  const ids = [id];

  try {
    const {
      rows
    } = await (0, _sessions.default)(rejectSession, ids);
    return rows[0];
  } catch (error) {
    return error;
  }
};

exports.rejectSession = rejectSession;