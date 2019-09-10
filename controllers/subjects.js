const express = require('express');
const models = require('../models');
const subjects = express.Router({mergeParams: true});

// index
subjects.get('/', (req, res) => {
  models.Subject.findAll().then(result => {
    res.status(200).json(result);
  }).catch(error => {
    res.status(404).res.json(error);
  });
});

// show
subjects.get('/:id', (req, res) => {
  models.Subject.findById(req.params.id)
    .then(subject => {
      if (subject) {
        res.status(200).json(subject);
      } else {
        res.status(404).json({message: 'Subject with given id does not exist.'});
      }
    }).catch(error => {
      res.status(500).json(error);
    });
});

// create
subjects.post('/', (req, res) => {
  models.Subject.create({
    name: req.body.name
  }).then(subject => {
    res.status(201).json(subject);
  }).catch(error => {
    res.status(500).json(error);
  });
});

// update
subjects.put('/:id', (req, res) => {
  models.Subject.update(
    {
      name: req.body.name
    },
    {where: {id: req.params.id}})
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// delete
subjects.delete('/:id', (req, res) => {
  let id = req.params.id;
  models.Question.update({subjectId: null}, {where: {subjectId: req.params.id}})
    .then(models.SubjectUser.update({subjectId: null}, {where: {subjectId: req.params.id}}))
    .then(() => {
      models.Subject.destroy({where: {id: req.params.id}});
    })
    .then(
      res.status(200).json('Subject with id ' + id + ' has been successfully deleted.'))
    .catch(error => {
      res.status(500).json({message: error});
    });
});

module.exports = subjects;
