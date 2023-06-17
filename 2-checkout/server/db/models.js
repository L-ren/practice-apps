// models contains methods to CRUD info with database
const db = require('./db.js');
const mysql = require('mysql2');

module.exports.add = (data) => {
  console.log(`post request recieved:`);
  console.log(data.table);
  console.log(data.id);
  let columns = Object.keys(data).slice(1);
  let values = Object.values(data).slice(1);
  // return a promise object retrieving from db
  // db.queryAsync(`INSERT INTO ${data.table} (${columns}) VALUES (${values});`);
};

module.exports.get = () => {
  console.log(`get method called in models`);
};