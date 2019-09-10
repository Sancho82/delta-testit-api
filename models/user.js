'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    role: {
      type: DataTypes.ENUM('STUDENT', 'MENTOR', 'ADMIN'),
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        min: 3,
        max: 500
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        min: 3,
        max: 500
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        max: 500
      }
    },
    picture: {
      type: DataTypes.STRING
    },
    encryptedPassword: DataTypes.STRING,
    groupId: DataTypes.INTEGER,
    lastLoginAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW
    }
  },
  {
    getterMethods: {
      fullName: function () {
        return `${this.firstName} ${this.lastName}`;
      },
      name: function () {
        return `${this.firstName} ${this.lastName}`;
      }
    },
    setterMethods: {
      password: function (password) {
        let encryptedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        this.setDataValue('encryptedPassword', encryptedPassword);
      }
    }
  }
  );
  User.associate = function (models) {
    User.belongsTo(models.Group, { foreignKey: 'groupId' });
    User.hasMany(models.Result, { foreignKey: 'userId' });
    User.hasMany(models.Test, { foreignKey: 'userId' });
    User.hasMany(models.SubjectUser, { foreignKey: 'userId' });
  };
  return User;
};
