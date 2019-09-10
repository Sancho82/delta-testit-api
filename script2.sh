#!/bin/bash

./node_modules/.bin/sequelize db:drop
./node_modules/.bin/sequelize db:create
./node_modules/.bin/sequelize db:migrate
./node_modules/.bin/sequelize db:seed --seed 20190205180826-groups 
./node_modules/.bin/sequelize db:seed --seed 20190205141138-subjects 
./node_modules/.bin/sequelize db:seed --seed 20190205140212-users 
./node_modules/.bin/sequelize db:seed --seed 20190205181617-subjectusers 
./node_modules/.bin/sequelize db:seed --seed 20190205174618-questions 
./node_modules/.bin/sequelize db:seed --seed 20190205175447-answers 
./node_modules/.bin/sequelize db:seed --seed 20190205173611-tests 
./node_modules/.bin/sequelize db:seed --seed 20190205152132-results 
./node_modules/.bin/sequelize db:seed --seed 20190205180135-choosenanswers 
./node_modules/.bin/sequelize db:seed --seed 20190205182525-testquestions
