const express = require('express');
const config = require('./config');
import { data } from './testData';

// console.info(data);

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {title: 'jonathan_o'});
});

app.get('/api/v1', (req, res) => {
  res.send(data);
});

app.listen(config.port, function listenHandler(){
  console.info(`Running on ${config.port}`);
});
