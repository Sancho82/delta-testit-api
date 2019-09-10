const appCreator = require('./index');

appCreator.then(app => {
  app.listen(process.env.PORT);
}).catch(err => {
  console.log(err);
});
