const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:2000/glossary');
// 2. Set up any schema and models needed by the app
const glossarySchema = new mongoose.Schema({
  word: String,
  definition: String
});
const Glossary = mongoose.model('Glossary', glossarySchema);
// 3. Export the models
module.exports.Glossary = Glossary;
// 4. Import the models into any modules that need them
