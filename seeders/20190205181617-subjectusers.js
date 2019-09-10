'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SubjectUsers', [
      {
        subjectId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectId: 7,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectId: 5,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectId: 4,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectId: 8,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
  }
};
