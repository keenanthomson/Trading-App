const tableName = userEntries;

const createTableQueries = (connection, database) => {
  connection.query(`USE ${database};`)
  connection.query(createTableQuery, (error, results, fields) => {
    if (error) {
      console.log(`Create table query error -> ${error}`);
    } else {
      console.log(``)
    }
  });
};

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS ${tableName} (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userID VARCHAR(64),
    checkin INT,
    checkout INT
);`

module.exports = createTableQueries;