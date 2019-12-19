const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postRoutes = require('./routes/posts');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

mongoose.connect('mongodb+srv://mahaveer:BjkRZLtdtcWjC5V3@cluster0-9dcqj.mongodb.net/node-angular?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true })
  .then(() => {
    console.log('connected to database!');
  })
  .catch(() => {
    console.log('connection failed!');
  });
//BjkRZLtdtcWjC5V3

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers'  ,
    'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods',
    'GET,POST,PATCH, PUT, DELETE,OPTIONS'
  );
  next();
});

app.use('/api/posts', postRoutes);

module.exports = app;
