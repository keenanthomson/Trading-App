const db = require('./index.js');
const {tableName} = require('./config.js')

const addNewRecord = (user_id, entry_price, stop_loss_price, target_price) => {
  db.query(`INSERT INTO {$tableName} VALUES (${user_id}, ${Date.now()}, ${entry_price}, ${stop_loss_price}, ${target_price})`);
};