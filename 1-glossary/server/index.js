require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require('./routes.js');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/words', router);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
