// models contains methods to CRUD info with database
const db = require('./db.js');
const mysql = require('mysql2');

module.exports.add = (data) => {
  if (data.table === 'user') {
    let columns = Object.keys(data).slice(1);
    let values = Object.values(data).slice(1);
    return db.queryAsync(`INSERT INTO user (${columns}) VALUES (?)
      ON DUPLICATE KEY UPDATE name=?, email=?, pw=?;`,
      [values, values[1], values[2], values[3]]
      );

  } else if (data.table === 'address') {
    let columns = Object.keys(data).slice(2);
    let values = Object.values(data).slice(2);
    console.log(data.cookie);
    return db.queryAsync(`SELECT id FROM user WHERE cookie=?;`, [data.cookie])
      .then((result) => {
        values.push(result[0][0].id)
        db.queryAsync(`INSERT INTO address (${columns},user_id) VALUES (?)
        ON DUPLICATE KEY UPDATE line1=?, line2=?, city=?, state=?, zip=?, phone=?;`,
        [values, values[0], values[1], values[2], values[3], values[4], values[5]])
        });

  } else if (data.table === 'payment') {
    console.log(`payment info packet received`);
    // insert attributes into payment table (excluding cookie)
    // use cookie to get userid from user table
    // assign userid to user_id foreign key
  }
};

module.exports.get = () => {
  console.log(`get method called in models`);
};