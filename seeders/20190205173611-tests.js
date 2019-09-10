'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tests', [
      {
        userId: 1,
        name: 'firstTest',
        time: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'secondTest',
        time: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'thirdTest',
        time: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'fourthTest',
        time: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'niceTest',
        time: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'killerTest',
        time: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
  }
};
