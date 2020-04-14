const mysql = require('mysql');
const db = mysql.createConnection({
  // host     : 'localhost',
  user     : 'root',
  password : ''
});
const database = 'UserEntries';

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
    // await createTables(db);
  console.log(`Connected to ${database} database as ID ${db.threadId}`);
}

module.exports = db;