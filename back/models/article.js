const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Le titre est recquis"]
  }, 
  content: {
    type: String, 
    required: [true, "Le contenu ne peux pas être vide "]
  }
});

module.exports = mongoose.model('Article', articleSchema);

//first argument is the singular uppercase name of by database collection so Article represents the articles MongoDb Collection
//the second argument is the schema which we defined above 
//An individual article is an instance of the Article model.

//TODO revoir les instances 
 