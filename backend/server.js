const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/user');
const express = require('express');
const app = express();
 
mongoose.connect(
    "mongodb+srv://HaiyanYao:Yhy025025@cluster0-xxw5x.mongodb.net/test?retryWrites=true",{ useNewUrlParser: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
 
app.use(express.json());
app.use('/api/users', users);
 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));