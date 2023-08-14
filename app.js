const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');

// Set direktori views
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
  res.render('index');
});

app.get('/about', function(req, res, next) {
  res.render('about');
});

app.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
});

app.get('/contact', function(req, res, next) {
  res.render('contact');
});

app.listen(3000, function() {
  console.log('Express berjalan di port: 3000');
});
