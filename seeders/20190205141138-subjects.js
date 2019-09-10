'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', [
      {
        name: 'Demo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Soft Skills',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Linux',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Progalapok',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Progtetelek',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'NodeJs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Git',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Java',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Express',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Angular',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
  }
};
