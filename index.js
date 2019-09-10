const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const subjects = require('./controllers/subjects');
const choosenAnswers = require('./controllers/choosenAnswers');
const results = require('./controllers/results');
const users = require('./controllers/users');
const questions = require('./controllers/questions');
const answers = require('./controllers/answers');
const tests = require('./controllers/tests');
const testQuestions = require('./controllers/testQuestions');
const subjectUsers = require('./controllers/subjectUsers');
const userLogin = require('./controllers/userLogin');
const groups = require('./controllers/groups');
const testResults = require('./controllers/testResults');
const userResults = require('./controllers/userResults');
const authentication = require('./controllers/middleware/authentication');

const swaggerUi = require('swagger-ui-express');
const swaggerFilePath = __dirname + '/docs/swagger.json';
const createMiddleware = require('swagger-express-middleware');

module.exports = new Promise((resolve, reject) => {
  createMiddleware(swaggerFilePath, app, (err, middleware) => {
    if (err) reject(err);
    app.use(cors());
    app.use(morgan('common'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(require(swaggerFilePath)));
    app.use(
      middleware.metadata(),
      middleware.CORS(),
      middleware.files(),
      middleware.parseRequest(),
      middleware.validateRequest()
    );
    app.use(authentication);
    app.use('/subjects', subjects);
    app.use('/questions', questions);
    app.use('/users', users);
    app.use('/answers', answers);
    app.use('/choosenanswers', choosenAnswers);
    app.use('/tests', tests);
    app.use('/testQuestions', testQuestions);
    app.use('/subjectUsers', subjectUsers);
    app.use('/login', userLogin);
    app.use('/groups', groups);
    app.use('/results', results);
    app.use('/tests/:testId/results', testResults);
    app.use('/users/:userId/results', userResults);
    resolve(app);
  });
});
