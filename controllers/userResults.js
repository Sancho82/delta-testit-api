const express = require('express');
const models = require('../models');
const userResults = express.Router({ mergeParams: true });
const { resultWithSum } = require('../lib/sum');

// index
userResults.get('/', (req, res) => {
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
userResults.get('/:id', (req, res) => {
  models.Result.findByPk(req.params.id, {
    include: [{
      model: models.Test,
      include: [{
        model: models.TestQuestion,
        include: [{
          model: models.Question,
          include: [{
            model: models.Answer
          }]
        }]
      }]
    }, {
      model: models.User
    }]
  })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(404).json(error);
    });
});

// create
userResults.post('/:id/fill', (req, res) => {
  models.Result.findByPk(req.params.id)
    .then(async result => {
      result.update({status: 'CLOSED'});
      const choosenAnswers = [];
      // await req.body.answerIds.forEach(async answerId => {
      // const answer = await models.Answer.findByPk(answerId);
      // const question = await answer.getQuestion();
      // const points = answer.isCorrect ? question.value : 0;
      // const choosenAnswer = await models.ChoosenAnswer.create({
      //   resultId: result.id,
      //   answerId: answerId,
      //   points
      // });
      for (let i = 0; i < req.body.answerIds.length; i++) {
        const answer = await models.Answer.findByPk(req.body.answerIds[i]);
        const question = await answer.getQuestion();
        const points = answer.isCorrect ? question.value : 0;
        const choosenAnswer = await models.ChoosenAnswer.create({
          resultId: result.id,
          answerId: req.body.answerIds[i],
          points
        });
        choosenAnswers.push(choosenAnswer);
      }
      try {
        resultWithSum(result).then(preparedResults => {
          res.status(201).json(preparedResults);
        }).catch(console.log);
      } catch (error) {
        console.log(error);
      }
    });
});

module.exports = userResults;
