var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = new sqlite.Database('./fitnessdb.sqlite', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Yay! You are connected to the database!');
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'FitnessBuddy', slogan: 'Your Buddy To Track Your Daily Calories.' });
});

module.exports = router;
