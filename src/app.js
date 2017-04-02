'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const router = express.Router();
const http = require('http');

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static(__dirname + '/public'))

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

//routes

app.get('/', (req, res, next) => {
  res.render('home', {title: 'Jacob Kortbeek'});
  next();
});

app.get('/about', (req, res, next) => {
  res.render('about', {title: 'Jacob Kortbeek'});
  next();
})

//start servr on local host 3000
app.listen(process.env.PORT || 5000)

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("It's alive!");
//   response.end();
// }).listen(3000);
