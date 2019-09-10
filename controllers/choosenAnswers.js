const express = require('express');
const models = require('../models');
const choosenAnswers = express.Router({ mergeParams: true });

choosenAnswers.get('/', (req, res) => {
  models.ChoosenAnswer.findAll()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(404).json(error);
    });
});

module.exports = choosenAnswers;
