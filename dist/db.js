"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const pool = new _pg.Pool({
  connectionString: process.env.DATABASE_URL
});
pool.on('connect', () => {
  console.log('connected to the db');
});

const createUsersTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      users(
        id SERIAL PRIMARY KEY,
        firstName VARCHAR(128) NOT NULL,
		lastName VARCHAR(128) NOT NULL,
		email VARCHAR(128) NOT NULL,
		password VARCHAR(128) NOT NULL,
		address VARCHAR(128) NOT NULL,
		bio VARCHAR(128) NOT NULL,
		occupation VARCHAR(128) NOT NULL,
		expertise VARCHAR(128) NOT NULL,
		mentor VARCHAR(128) NOT NULL  
      )`;
  pool.query(queryText).then(res => {
    console.log(res); // pool.end();
  }).catch(err => {
    console.log(err); // pool.end();
  });
};

const createSessionsTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      sessions(
        id SERIAL PRIMARY KEY,
		mentorId INT NOT NULL,
		menteeId INT NOT NULL,
		questions VARCHAR(128) NOT NULL,
		menteeEmail VARCHAR(128) NOT NULL,
		status VARCHAR(128) NOT NULL  
      )`;
  pool.query(queryText).then(res => {
    console.log(res); // pool.end();
  }).catch(err => {
    console.log(err); // pool.end();
  });
};

const createReviewsTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      sessions(
	    id SERIAL PRIMARY KEY,
		sessionId INT(10) NOT NULL,
	    mentorId INT(10) NOT NULL,
	   	menteeId INT(10) NOT NULL,
	    score INT(10) NOT NULL,
	    menteeFullName VARCHAR(128) NOT NULL,
		remark VARCHAR(128) NOT NULL    
      )`;
  pool.query(queryText).then(res => {
    console.log(res); // pool.end();
  }).catch(err => {
    console.log(err); // pool.end();
  });
};

const dropUsersTable = () => {
  const queryText = 'DROP TABLE IF EXISTS users';
  pool.query(queryText).then(res => {
    console.log(res); // pool.end();
  }).catch(err => {
    console.log(err); // pool.end();
  });
};

const dropSessionsTable = () => {
  const queryText = 'DROP TABLE IF EXISTS sessions';
  pool.query(queryText).then(res => {
    console.log(res); // pool.end();
  }).catch(err => {
    console.log(err); // pool.end();
  });
};

const dropReviewsTable = () => {
  const queryText = 'DROP TABLE IF EXISTS sessions';
  pool.query(queryText).then(res => {
    console.log(res); // pool.end();
  }).catch(err => {
    console.log(err); // pool.end();
  });
}; // pool.on('remove', () => {
//   console.log('client removed');
//   process.exit(0);
// });


var _default = {
  createSessionsTable,
  createUsersTable,
  dropUsersTable,
  dropSessionsTable
};
exports.default = _default;