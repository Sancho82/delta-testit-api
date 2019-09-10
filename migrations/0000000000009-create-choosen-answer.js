'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ChoosenAnswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resultId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Results',
          key: 'id'
        }
      },
      answerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Answers',
          key: 'id'
        }
      },
      points: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ChoosenAnswers');
  }
};
