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

const dbSetup = async () => {
  await db.query(`CREATE DATABASE IF NOT EXISTS ${database}`);
  await db.query(`USE ${database}`);
  await createTableQueries(db, databaseName);
  return console.log(`Connected to ${database} database as ID ${db.threadId}`);
};

module.exports = db;