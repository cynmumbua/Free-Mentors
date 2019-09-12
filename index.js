import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 5000;
import index from './routes/index';
import db from './db';

// const environment = process.env.NODE_ENV === 'test'
db.createUsersTable();
db.createSessionsTable();
// if (environment) {
//     db.dropUsersTable();
//     db.dropSessionsTable();
//     db.createUsersTable();
// 	db.createSessionsTable();
//   }else{
// 	db.createUsersTable();
//     db.createSessionsTable();
//   }


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', index);


app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;