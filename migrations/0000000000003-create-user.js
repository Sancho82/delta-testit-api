'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.ENUM('STUDENT', 'MENTOR', 'ADMIN'),
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
          min: 3,
          max: 500
        }
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
          min: 3,
          max: 500
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          max: 500
        }
      },
      picture: {
        type: Sequelize.STRING
      },
      encryptedPassword: {
        type: Sequelize.STRING
      },
      groupId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Groups',
          key: 'id'
        }
      },
      lastLoginAt: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('Users');
  }
};
