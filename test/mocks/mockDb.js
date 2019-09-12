import { Pool } from 'pg';
import dotenv  from 'dotenv';
import db from './db';


dotenv.config();


const Test = () => {

db.dropUsersTable()
db.dropSessionsTable()
}
