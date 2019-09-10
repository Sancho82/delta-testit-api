const express = require('express');
const models = require('../models');
const testQuestions = express.Router({mergeParams: true});

// index
testQuestions.get('/', (req, res) => {
  models.TestQuestion.findAll().then(result => {
    res.status(200).json(result);
  }).catch(error => {
    res.status(404).res.json(error);
  });
});

module.exports = testQuestions;
