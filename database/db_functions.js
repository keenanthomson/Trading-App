const db = require('./index.js');
const {tableName} = require('./config.js')

const addNewRecord = (user_id, entry_price, stop_loss_price, target_price) => {
  db.query(`INSERT INTO {$tableName} VALUES (${user_id}, ${Date.now()}, ${entry_price}, ${stop_loss_price}, ${target_price});`);
};

const deleteRecord = (record_id) => {
  db.query(`DELETE FROM ${tableName} WHERE record_id = ${record_id};`);
};

module.exports = {
  addNewRecord: addNewRecord,
  deleteRecord: deleteRecord
};