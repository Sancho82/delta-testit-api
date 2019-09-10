const jwt = require('jsonwebtoken');
const models = require('../../models');
const config = require('../../config/config');
const endpoints = {
  'GET /users': ['MENTOR', 'ADMIN'],
  'GET /users/{id}': ['STUDENT', 'MENTOR', 'ADMIN'],
  'POST /users': ['MENTOR', 'ADMIN'],
  'PUT /users/{id}': ['STUDENT', 'MENTOR', 'ADMIN'],
  'DELETE /users/{id}': ['MENTOR', 'ADMIN'],

  'GET /questions': ['MENTOR', 'ADMIN'],
  'GET /questions/{id}': ['MENTOR', 'ADMIN'],
  'POST /questions': ['MENTOR', 'ADMIN'],
  'PUT /questions/{id}': ['MENTOR', 'ADMIN'],
  'DELETE /questions/{id}': ['MENTOR', 'ADMIN'],

  'GET /tests': ['MENTOR', 'ADMIN', 'STUDENT'],
  'GET /tests/{id}': ['MENTOR', 'ADMIN'],
  'POST /tests': ['MENTOR', 'ADMIN'],
  'PUT /tests/{id}': ['MENTOR', 'ADMIN'],
  'DELETE /tests/{id}': ['MENTOR', 'ADMIN'],

  'POST /user/login': ['STUDENT', 'MENTOR', 'ADMIN'],
  'GET /users/{id}/results': ['STUDENT', 'MENTOR', 'ADMIN'],

  'POST /users/{userId}/results/{id}/fill': ['STUDENT', 'MENTOR', 'ADMIN'],

  'GET /login': ['anonymus'],
  'GET /': ['anonymus']

};
module.exports = (req, res, next) => {
  const endpoint = `${req.method} ${req.swagger.pathName}`;
  if (!endpoints[endpoint]) return next();
  if (!req.headers.authorization && endpoints[endpoint].includes('anonymus')) {
    return next();
  }
  if (!req.headers.authorization) {
    res.status(401).json({message: 'Authorization failed.'});
  }
  const token = req.headers.authorization.split(' ')[1];
  console.log('Token is: ' + token);
  const decoded = jwt.verify(token, config.JWT_SECRET);
  const userId = decoded.data.id;
  models.User.findById(userId)
    .then(user => {
      req.user = user;
      if (endpoints[endpoint].includes(user.role)) {
        next();
      } else {
        res.status(401).send('Unauthorized');
      }
    });
};
