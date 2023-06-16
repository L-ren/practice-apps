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

router.get('/search', (req, res) => {
  // get params from url
  console.log(req.params)
  let search = 'app';
  models.getSearch(search).then((data) => {
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

router.delete('/', (req, res) => {
  let word = req.body.deletedWord;
  models.delete(word).then(() => {
    res.status(200).end()
  })
});

router.put('/', (req, res) => {
  let word = req.body.editedWord;
  let definition = req.body.definition;
  models.edit(word, definition).then(() => {
    res.status(200).end()
  })
});

module.exports = router;