const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();
const databaseName = 'workout_db'

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/populate",
     { 
         useNewUrlParser: true ,
         useUnifiedTopology: true
     })
     .then(() => console.log('Succesfully connected to the database!'));



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
