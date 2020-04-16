const db = require('./index.js');

console.log(db);

const createTableQuery = `
CREATE TABLE IF NOT EXISTS userEntries (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userID VARCHAR(64),
  checkin INT,
  checkout INT
);`

db.query(createTableQuery, (error, results, fields) => {
  if (error) {
    console.log(`Create table query error -> ${error}`);
  };
});