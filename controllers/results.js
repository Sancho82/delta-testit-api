const express = require('express');
const models = require('../models');
const results = express.Router({ mergeParams: true });
const { resultsWithSum } = require('../lib/sum');

// index
results.get('/', (req, res) => {
  models.Result.findAll({
    include: [{
      model: models.User,
      include: [{
        model: models.Group
      }]
    }, {
      model: models.Test
    }]
  }).then(results => {
    try {
      resultsWithSum(results).then(preparedResults => {
        res.status(200).json(preparedResults);
      }).catch(console.log);
    } catch (error) {
      console.log(error);
    }
  }).catch(error => {
    res.status(404).res.json(error);
  });
});

module.exports = results;
