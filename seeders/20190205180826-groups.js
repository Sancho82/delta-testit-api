'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups', [
      {
        name: 'Group1',
        description: 'Nice group.',
        picture: 'groupPic1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Group2',
        description: 'Not so nice group.',
        picture: 'groupPic2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Group3',
        description: 'Terrible group.',
        picture: 'groupPic3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Delta',
        description: 'Best group',
        picture: 'groupPic3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
  }
};
