const express = require('express');
const models = require('../models');
const questions = express.Router({ mergeParams: true });

// index
questions.get('/', (req, res) => {
  models.Question.findAll({
    include: [{
      model: models.Subject
    }, {
      model: models.Answer
    }]
  }).then(result => {
    res.status(200).json(result);
  }).catch(error => {
    res.status(404).res.json(error);
  });
});

// show
questions.get('/:id', (req, res) => {
  models.Question.findById(req.params.id, {
    include: [{
      model: models.Answer
    }]
  })
    .then(question => {
      if (question) {
        res.status(200).json(question);
      } else {
        res.status(404).json({ message: 'Question with given id does not exist.' });
      }
    }).catch(error => {
      res.status(500).json(error);
    });
});

// create
questions.post('/', (req, res) => {
  models.Question.create({
    subjectId: req.body.subjectId,
    text: req.body.text,
    type: req.body.type,
    value: req.body.value
  }).then(question => {
    let promises = [];
    req.body.Answers.forEach(async element => {
      promises.push(models.Answer.create({
        questionId: question.id,
        text: element.text,
        isCorrect: element.isCorrect}));
    });
    let resp = Promise.all(promises);
    res.status(201).json(resp);
  }).catch(error => {
    res.status(500).json(error);
  });
});

// update
questions.put('/:id', (req, res) => {
  models.Question.update(
    {
      subjectId: req.body.subjectId || null,
      text: req.body.text,
      type: req.body.type,
      value: req.body.value
    },
    { where: { id: req.params.id } })
    .then(question => {
      let promises = [];
      req.body.Answers.forEach(async element => {
        promises.push(models.Answer.update({
          questionId: question.id,
          text: element.text,
          isCorrect: element.isCorrect
        }, {
          where: { id: element.id }
        }));
      });
      Promise.all(promises).then((questions) => {
        res.status(200).json(questions);
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// delete
questions.delete('/:id', (req, res) => {
  let id = req.params.id;
  models.Answer.update({ questionId: null }, { where: { questionId: req.params.id } })
    .then(() => {
      models.TestQuestion.destroy({ where: { questionId: id } });
      models.Question.destroy({ where: { id: id } });
    })
    .then(res.status(200).json('Question with id ' + id + ' has been successfully deleted.'))
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = questions;
