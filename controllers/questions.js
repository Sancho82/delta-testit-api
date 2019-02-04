const express = require('express');
const models = require('../models');
const questions = express();

// index
questions.get('/', (req, res) => {
  models.Question.findAll().then(result => {
    res.status(200).json(result);
  }).catch(error => {
    res.status(404).res.json('' + error);
  });
});

// show
questions.get('/:id', (req, res) => {
  models.Question.findById(req.params.id)
    .then(result => {
      if (!result) {
        throw new Error();
      }
      res.status(200).json(result);
    }).catch(error => {
      res.status(404).json({message: error + '! Question with given id does not exist.'});
    });
});

// create
questions.post('/', (req, res) => {
  models.Question.create({
    subjectId: req.body.subjectId,
    questionText: req.body.questionText,
    level: req.body.level,
    type: req.body.type,
    value: req.body.value
  }).then(user => {
    res.status(200).json(user);
  }).catch(error => {
    res.status(404).json(error);
  });
});

// update
questions.put('/:id', (req, res) => {
  models.Question.update(
    {
      subjectId: req.body.subjectId,
      questionText: req.body.questionText,
      level: req.body.level,
      type: req.body.type,
      value: req.body.value
    },
    {where: {id: req.params.id}})
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(404).json(error);
    });
});

// delete
questions.delete('/:id', (req, res) => {
  models.Question.findById(req.params.id)
    .then(result => {
      if (!result) {
        throw new Error();
      }
      let id = result.id;
      models.Question.destroy({where: {id: req.params.id}})
        .then(res.send('Question with id ' + id + ' has been successfully deleted.'));
    })
    .catch(error => {
      res.status(404).json({message: error + '! Question with given id does not exist.'});
    });
});

module.exports = questions;