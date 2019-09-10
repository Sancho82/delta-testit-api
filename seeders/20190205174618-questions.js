'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {
        subjectId: 1,
        text: 'Mennyire vagy asszertív a reggeli kávéd előtt?',
        picture: 'pic7',
        type: 'Select one',
        value: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectId: 1,
        text: 'Olvastál e ma a Sequelize dokumentációból?',
        picture: 'pic2',
        type: 'Select one',
        value: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectId: 1,
        text: 'Minek a rövidítése a Modem?',
        picture: 'pic3',
        type: 'Select one',
        value: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectId: 1,
        text: 'Hány pontosvessző van egy átlagos for ciklusban Python-ban?',
        picture: 'pic5',
        type: 'Select one',
        value: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subjectId: 1,
        text: 'Push-oltál e ma a git-re?',
        picture: 'pic6',
        type: 'Select one',
        value: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
  }
};
