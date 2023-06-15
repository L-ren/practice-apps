require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require('./routes.js');

const app = express();

app.use(express.json());
// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));

// requests from client to get all/searched words or post word
app.use('/words', router);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
