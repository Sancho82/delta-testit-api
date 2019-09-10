'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TestQuestions', [
      {
        questionId: 1,
        testId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 2,
        testId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 3,
        testId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 5,
        testId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 3,
        testId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 4,
        testId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 5,
        testId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
  }
};
