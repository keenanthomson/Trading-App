const mysql = require('mysql');
const createTables = require('./config.js');

const db = mysql.createConnection({
  user     : 'root',
  password : ''
});
const database = 'TradingCalculator';

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
  await createTables();
  console.log(`Connected to ${database} database as ID ${db.threadId}`);
};

module.exports = db;