// import mongoose model here?
const {Glossary} = require('./db.js');

module.exports.addWord = (word, definition) => {
  return (Glossary
    .find({word})
    .exec()
    .then((data) => {
      if (!data.length) {
        const newWord = new Glossary({
          word: word,
          definition: definition
        }).save()
        return true;
      }
      return false;
    }))
};

module.exports.getAll = () => {
  return (
    Glossary.find({})
      .select({word: 1, definition: 1, _id: 0})
      .limit(25)
      .exec()
    );
};

// get all words matching search term
module.exports.getSearch = (searchTerm) => {
  return (
    Glossary.find({word: {$regex: searchTerm}})
      .select({word: 1, definition: 1, _id: 0})
      .limit(25)
      .exec()
  );
};

module.exports.delete = (word) => {
  return (
    Glossary.findOneAndDelete({word})
      .exec()
  )
};

module.exports.edit = (word, definition) => {
  return (
    Glossary.findOneAndUpdate({word}, {word, definition: definition})
      .exec()
  )
};