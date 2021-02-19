const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/index');
require("dotenv").config();

//TODO mettre en arrow fonction et en import ES6

const app = express();
const PORT = 3010;
const MONGODB_URI = "mongodb://localhost:27017/jonglistiquement_db";
const db = mongoose.connection

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use('/api', router);

//TODO relire la doc mongoose
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
db.on('error', function(error) {
  console.log('mongoose connection error: ' + error)
})
db.once('open', function() {
  console.log(`Connected to the database ${MONGODB_URI}`);
});

app.listen(PORT, function() {console.log(`server listenning on port ${PORT}`)})