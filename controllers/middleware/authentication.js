// const jwt = require('jsonwebtoken');
// const models = require('../../models');
// const config = require('../../config/config');
// const endpoints = {
//   'GET /users/{id}': ['STUDENT', 'MENTOR', 'ADMIN'],
//   'POST /userRegistration': ['STUDENT', 'MENTOR', 'ADMIN'],
//   'GET /userLogin': ['STUDENT', 'MENTOR', 'ADMIN'],
//   'GET /': ['anonymus']

// };
// module.exports = (req, res, next) => {
//   const endpoint = `${req.method} ${req.swagger.pathName}`;
//   if (!req.headers.authorization && endpoints[endpoint].includes('anonymus')) {
//     return next();
//   }
//   const token = req.headers.authorization;
//   const decoded = jwt.verify(token, config.JWT_SECRET);
//   const userId = decoded.id;
//   models.User.findById(userId)
//     .then(user => {
//       req.user = user;
//       if (endpoints[endpoint].includes(user.role)) {
//         next();
//       } else {
//         res.status(403).send('Unauthorized');
//       }
//     });
// };
