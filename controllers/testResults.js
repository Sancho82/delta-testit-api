const express = require('express');
const models = require('../models');
const testResults = express.Router({ mergeParams: true });

// index
testResults.get('/', (req, res) => {
  models.Result.findAll({
    include: [{
      model: models.User
    }, {
      model: models.Test
    }]
  }).then(results => {
    res.status(200).json(results);
  }).catch(error => {
    res.status(404).res.json(error);
  });
});

// show
testResults.get('/:testId', (req, res) => {
  models.Result.findAll({where: {testId: req.params.testId}}).then(results => {
    res.status(200).json(results);
  }).catch(error => {
    res.status(404).res.json(error);
  });
});

module.exports = testResults;
