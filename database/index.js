const mysql = require('mysql');
const {createTableQueries} = require('./config.js');
const databaseName = 'trading_calculator';

const db = mysql.createConnection({
  user     : 'root',
  password : '',
  database: databaseName
});

db.connect(error => {
  if (error) {
    console.log(`Error opening MySQL connection: `, error);
  } else {
    createTableQueries(db, databaseName);
    console.log(`Database ${databaseName} is connected.`)
  };
}); 

// const dbSetup = () => {
//   db.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`);
//   db.query(`USE ${databaseName}`);
//   console.log(`Connected to ${databaseName} database as ID ${db.threadId}`);
// };

module.exports = db;