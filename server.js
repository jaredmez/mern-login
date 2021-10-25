require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express();

app.use(express.urlencoded());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(()=>  console.log("MongoDB connected!"))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}...`));
