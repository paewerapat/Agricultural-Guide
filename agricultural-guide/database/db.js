import mysql from 'serverless-mysql';
import dbConfig from "./db.config";


// Create a connection to the database
const db = mysql({
  config: {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  }
})

export default db;