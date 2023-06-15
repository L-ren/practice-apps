const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log(`serving request {req}`);
  next()
});

router.get('/', (req, res) => {
  console.log(`get request received`);
  let fakeData = [];
  res.end(JSON.stringify(fakeData))
});

router.post('/search', (req, res) => {
  console.log(`get request for search received`)
  console.log(`search text: ${req.body.searchText}`);
  let fakeData = [];
  res.end(JSON.stringify(fakeData))
});

router.post('/', (req, res) => {
  let word = req.body.addedWord;
  let description = req.body.description;
  console.log(`added word: ${word}`);
  res.end(`post received!`)
});

module.exports = router;