const db = require('./index.js');
const {tableName} = require('./config.js')
const moment = require('moment')

const addNewRecord = (user_id, entry_price, stop_loss_price, target_price) => {
  const insertStatement = `INSERT INTO ${tableName} VALUES (${user_id}, '9999-12-31 23:59:50', ${entry_price}, ${stop_loss_price}, ${target_price});`
  db.query(insertStatement, (err, results) => {
    if (err) {
      console.log(`addNewRecord error: ${err}`)
    } else {
      console.log(`Entry added to db successfully -> ${results}`);
    };
  });
};

const deleteRecord = (record_id) => {
  db.query(`DELETE FROM ${tableName} WHERE record_id = ${record_id};`);
};

module.exports = {
  addNewRecord: addNewRecord,
  deleteRecord: deleteRecord
}; 

// addNewRecord('abcd', 10000, 11000, 8000); 

// console.log('test test');