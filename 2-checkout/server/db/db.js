const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS user
        (
          id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(40) NOT NULL,
          email VARCHAR(40) NOT NULL,
          pw VARCHAR(20) NOT NULL
        );
      `))
  .then(() =>
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS address
        (
         id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         line1 VARCHAR(50) NOT NULL,
         line2 VARCHAR(50),
         city VARCHAR(20) NOT NULL,
         state VARCHAR(20) NOT NULL,
         phone INT NOT NULL,
         user_id INT NOT NULL,
         FOREIGN KEY (user_id) REFERENCES user(id)
        );
      `))
  .then(() =>
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS payment
        (
          id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          card INT NOT NULL,
          exp DATE NOT NULL,
          cvv INT NOT NULL,
          zip INT NOT NULL,
          user_id INT NOT NULL,
          FOREIGN KEY (user_id) REFERENCES user(id)
        );
      `))
  .catch((err) => console.log(err));

module.exports = db;
