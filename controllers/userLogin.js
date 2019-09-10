const models = require('../models');
const express = require('express');
const userLogin = express.Router({ mergeParams: true });
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

userLogin.post('/', (req, res) => {
  console.log(req.body);
  models.User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (!user) {
        res.status(401).json({ message: 'Authentication failed.' });
      } else {
        bcrypt.compare(req.body.password, user.encryptedPassword, (err, result) => {
          if (err) {
            res.status(401).json({ message: 'Authentication failed.' });
          } else if (result) {
            const token = jwt.sign({data: {email: req.body.email, role: user.role, id: user.id}}, config.JWT_SECRET, {expiresIn: '1h'});
            res.status(200).json({message: 'Authentication successful.', token});
            models.User.update({lastLoginAt: new Date()}, {where: {id: user.id}});
          } else {
            res.status(401).json({ message: 'Authentication failed.' });
          }
        });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = userLogin;
