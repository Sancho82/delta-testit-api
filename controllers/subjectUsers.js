const express = require('express');
const models = require('../models');
const subjectUsers = express.Router({mergeParams: true});

// index
subjectUsers.get('/', (req, res) => {
  models.SubjectUser.findAll().then(result => {
    res.status(200).json(result);
  }).catch(error => {
    res.status(404).res.json(error);
  });
});

module.exports = subjectUsers;
