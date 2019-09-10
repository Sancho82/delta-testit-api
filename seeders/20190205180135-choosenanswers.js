'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ChoosenAnswers', [
      {
        resultId: 1,
        answerId: 1,
        points: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        resultId: 2,
        answerId: 2,
        points: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        resultId: 3,
        answerId: 3,
        points: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
  }
};
