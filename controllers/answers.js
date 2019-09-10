const express = require('express');
const models = require('../models');
const answers = express.Router({ mergeParams: true });

// index
answers.get('/', (req, res) => {
  models.Answer.findAll()
    .then(results => {
      res.status(200).json(results);
    })
    .catch(error => {
      res.status(404).json(error);
    });
});

// create
answers.post('/', (req, res) => {
  models.Answer.create({
    questionId: req.body.questionId,
    text: req.body.text,
    isCorrect: req.body.isCorrect,
    picture: req.body.picture
  }).then(answer => {
    res.status(201).json(answer);
  }).catch(error => {
    res.status(500).json(error);
  });
});

// delete
answers.delete('/:id', (req, res) => {
  let id = req.params.id;
  models.ChoosenAnswer.update(
    {answerId: null},
    {where: {answerId: req.params.id}})
    .then(() => {
      models.Answer.destroy({where: {id: req.params.id}})
        .then(res.status(200).json({message: 'Answer with id ' + id + ' has been successfully deleted.'}))
        .catch(error => {
          res.status(500).json(error);
        });
    });
});

module.exports = answers;
