const tableName = 'userEntries';

const createTableQueries = async (connection, database) => {
  await connection.query(`USE ${database};`);
  await connection.query(createTableQuery, (error, results, fields) => {
    if (error) {
      console.log(`Create table query error -> ${error}`);
    } else {
      console.log(``)
    };
  });
};

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS ${tableName} (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(64),
    trade_saved_date DATETIME,
    entry_price INT,
    stop_loss_price INT,
    target_price INT
);`

module.exports = createTableQueries;