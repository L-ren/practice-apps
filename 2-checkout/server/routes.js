// routes requests to server/index.js to models methods
const express = require('express');
const models = require('./db/models.js');
const router = express.Router();

router.post('/', (req, res) => {
  models.add(req.body);
  res.status(201).end('post success');
    // .then((results) => {
    //   // this should return a promise, put res.end in callback, and CATCH ERR
    //   res.status(201).end('post success');
    // }).catch((err) => {
    //   console.log(err);
    // });
});

router.get('/', (req, res) => {
  console.log(req.body);
  models.get();
  res.status(200).end('get success');
});

module.exports = router;