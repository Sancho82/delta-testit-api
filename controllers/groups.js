const express = require('express');
const models = require('../models');
const groups = express.Router({ mergeParams: true });

// index
groups.get('/', (req, res) => {
  models.Group.findAll()
    .then(results => {
      res.status(200).json(results);
    })
    .catch(error => {
      res.status(404).json(error);
    });
});

// show
groups.get('/:id', (req, res) => {
  models.Group.findById(req.params.id)
    .then(group => {
      if (group) {
        res.status(200).json(group);
      } else {
        res.status(404).json({ message: 'Group with given id does not exist.' });
      }
    }).catch(error => {
      res.status(500).json(error);
    });
});

// create
groups.post('/', (req, res) => {
  models.Group.create({
    name: req.body.name,
    description: req.body.description,
    picture: req.body.picture
  }).then(result => {
    res.status(201).json(result);
  }).catch(error => {
    res.status(500).json(error);
  });
});

// update
groups.put('/:id', (req, res) => {
  models.Group.update(
    {
      name: req.body.name,
      description: req.body.description
    },
    {where: {id: req.params.id}})
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = groups;
