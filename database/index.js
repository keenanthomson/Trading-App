const mysql = require('mysql');
const {createTableQueries} = require('./config.js');

const db = mysql.createConnection({
  user     : 'root',
  password : ''
});
const databaseName = 'trading_calculator';

db.connect(error => {
  if (error) {
    console.log(`Error opening MySQL connection: `, error);
  } else {
    dbSetup();
  };
}); 

const dbSetup = () => {
  db.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`);
  db.query(`USE ${databaseName}`);
  createTableQueries(db, databaseName);
  return console.log(`Connected to ${databaseName} database as ID ${db.threadId}`);
};

module.exports = db;