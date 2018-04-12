'use strict';

var _testData = require('./testData');

var express = require('express');
var config = require('./config');


// console.info(data);

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', { title: 'jonathan_o' });
});

app.get('/api/v1', function (req, res) {
  res.send(_testData.data);
});

app.listen(config.port, function listenHandler() {
  console.info('Running on ' + config.port);
});