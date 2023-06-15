const express = require('express');
const router = express.Router();
const models = require('./models.js');

router.use((req, res, next) => {
  console.log(`serving ${req.method} request`);
  next()
});

router.get('/', (req, res) => {
  models.getAll().then((data) => {
    res.status(200).end(JSON.stringify(data))
  })
});

router.post('/search', (req, res) => {
  models.getSearch(req.body.searchText).then((data) => {
    res.status(201).end(JSON.stringify(data))
  })
});

router.post('/', (req, res) => {
  let word = req.body.addedWord;
  let description = req.body.description;
  models.addWord(word, description).then((success) => {
    if (success) {
      res.status(201).end()
    } else {
      res.status(409).send('word already exists');
    }
  });
});

module.exports = router;