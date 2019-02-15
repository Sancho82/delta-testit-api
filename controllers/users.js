const express = require('express');
const models = require('../models');
const bcrypt = require('bcrypt');
const users = express.Router({ mergeParams: true });
const mailgunConfig = require('../config/mailgun.json');

// index
users.get('/', (req, res) => {
  models.User.findAll().then(result => {
    res.status(200).json(result);
  }).catch(error => {
    res.status(404).res.json(error);
  });
});

// show
users.get('/:id', (req, res) => {
  models.User.findById(req.params.id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User with given id does not exist.' });
      }
    }).catch(error => {
      res.status(500).json(error);
    });
});

// create
users.post('/', (req, res) => {
  models.User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (user >= 1) {
        res.status(200).json('User with such an email already exits!');
      } else {
        bcrypt.hash(req.body.password, 10)
          .then(hash => {
            let originalPassword = req.body.password;
            req.body.password = hash;
            models.User.create({
              role: req.body.role,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              encryptedPassword: req.body.password,
              groupId: req.body.groupId
            }).then(user => {
              sendMail(originalPassword, req.body.email);
              res.status(201).json({ message: 'User has been succesfully created.' });
            }).catch(error => {
              res.status(500).json(error);
            });
          })
          .catch(error => {
            res.status(500).json(error);
          });
      }
    });
});

// update
users.put('/:id', (req, res) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    let originalPassword = req.body.password;
    req.body.password = hash;
    models.User.update(
      {
        role: req.body.role,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        encryptedPassword: req.body.password,
        groupId: req.body.groupId
      },
      { where: { id: req.params.id } })
      .then(user => {
        sendMail2(originalPassword, req.body.email);
        let name = req.body.firstName;
        res.status(200).json({ message: name + ' has been succesfully updated.' });
      })
      .catch(error => {
        res.status(406).json(error);
      });
  });
});

// delete
users.delete('/:id', (req, res) => {
  models.SubjectUser.update({ userId: null }, { where: { userId: req.params.id } })
    .then(() => {
      models.Test.update({ userId: null }, { where: { userId: req.params.id } })
        .then(() => {
          models.Result.update({ userId: null }, { where: { userId: req.params.id } })
            .then(() => {
              models.User.destroy({ where: { id: req.params.id } })
                .then(() => {
                  res.json({ message: 'User has been successfully deleted.' });
                });
            });
        });
    })
    .catch(error => res.status(500).json(error));
});

const sendMail = (password, email) => {
  var api_key = mailgunConfig.api_key;
  var domain = mailgunConfig.domain;
  var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

  let data = {
    from: 'Flow Academy TestIT <flowacademytestit@gmail.com>',
    to: `${email}`,
    subject: 'Registration',
    text: `Kedves regisztráló! A bejelenkezéshez való jelszavad: ${password}`
  };

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      // console.log(error);
    }
    // console.log(body);
  });
};

const sendMail2 = (password, email) => {
  var api_key = mailgunConfig.api_key;
  var domain = mailgunConfig.domain;
  var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

  let data = {
    from: 'Flow Academy TestIT <flowacademytestit@gmail.com>',
    to: `${email}`,
    subject: 'Registration',
    text: `Kedves regisztráló! A bejelenkezéshez való új jelszavad: ${password}`
  };

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      // console.log(error);
    }
    // console.log(body);
  });
};

module.exports = users;
