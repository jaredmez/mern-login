require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')

const users = require('./routes/api/users')

const app = express();

app.use(express.urlencoded());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// connect to MongoDB
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI)
  .then(()=>  console.log("MongoDB connected!"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);

//routes
app.use('/api/users', users);

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}...`));
