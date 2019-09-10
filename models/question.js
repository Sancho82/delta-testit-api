'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    subjectId: {
      type: DataTypes.INTEGER
    },

    text: {
      type: DataTypes.STRING,
      allowNull: false
    },

    picture: {
      type: DataTypes.STRING
    },

    type: {
      type: DataTypes.STRING,
      allowNull: false
    },

    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  }, {});
  Question.associate = function (models) {
    Question.hasMany(models.TestQuestion, { foreignKey: 'questionId' });
    Question.hasMany(models.Answer, { foreignKey: 'questionId' });
    Question.belongsTo(models.Subject, { foreignKey: 'subjectId' });
  };
  return Question;
};
